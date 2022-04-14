/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
import {
    ClientPagedList,
    ClientPagedListColumnKey,
    ClientPagedListItem,
    IDropdownMenuItem,
    SeComponent,
    TypedMap
} from 'smarteditcommons';

type ClientPagedListScope = ClientPagedList & angular.IScope;

/**
 * **Deprecated since 2005, use [ClientPagedListComponent]{@link /smarteditcommons/components/ClientPagedListComponent.html}**.
 *
 *
 * Component responsible for displaying a client-side paginated list of items with custom renderers. It allows the user to search and sort the list.
 *
 * ### Parameters
 *
 * `items` An array of item descriptors.
 *
 * `keys` An array of object(s) with a property and an i18n key.
 *  The properties must match one at least one of the descriptors' keys and will be used as the columns of the table. The related i18n keys are used for the column headers' title.
 *
 * `renderers` An object that contains HTML renderers for specific keys property. A renderer is a function that returns a HTML string. This function accepts two arguments: "item" and "key".
 *
 * `injectedContext` An object that exposes values or functions to the component. It can be used by the custom HTML renderers to bind a function to a click event for example.
 *
 * `reversed` If set to true, the list will be sorted descending.
 *
 * `itemsPerPage` The number of items to display per page.
 *
 * `query` The ngModel query object used to filter the list.
 *
 * `displayCount` If set to true the size of the filtered collection will be displayed.
 *
 * `itemFilterKeys` (OPTIONAL) An array of object keys that will determine which fields the "LegacyFilterByFieldFilter"
 * will use to filter through the items.
 *
 *      <client-paged-list items="pageListCtl.pages"
 *                  keys="[{
 *                          property:'title',
 *                          i18n:'pagelist.headerpagetitle'
 *                          },{
 *                          property:'uid',
 *                          i18n:'pagelist.headerpageid'
 *                          },{
 *                          property:'typeCode',
 *                          i18n:'pagelist.headerpagetype'
 *                          },{
 *                          property:'template',
 *                          i18n:'pagelist.headerpagetemplate'
 *                          }]"
 *                  renderers="pageListCtl.renderers"
 *                  injectedContext="pageListCtl.injectedContext"
 *                  sort-by="'title'"
 *                  reversed="true"
 *                  items-per-page="10"
 *                  query="pageListCtl.query.value"
 *                  display-count="true"
 *      ></client-paged-list>
 *
 * ### Example of a <strong>renderers</strong> object
 *
 *      renderers = {
 *          name: function(item, key) {
 *              return "<a data-ng-click=\"injectedContext.onLink( item.path )\">{{ item[key.property] }}</a>";
 *          }
 *      };
 *
 * ### Example of an <strong>injectedContext</strong> object
 *
 *      injectedContext = {
 *          onLink: function(link) {
 *              if (link) {
 *                  var experiencePath = this._buildExperiencePath();
 *                  iframeManagerService.setCurrentLocation(link);
 *                  $location.path(experiencePath);
 *              }
 *          }.bind(this)
 *      };
 *
 * @deprecated
 */
@SeComponent({
    selector: 'client-paged-list',
    templateUrl: 'LegacyClientPagedListComponentTemplate.html',
    inputs: [
        'items:=',
        'itemsPerPage:=',
        'totalItems:=?',
        'keys:=',
        'renderers:=',
        'injectedContext:=',
        'identifier:=',
        'sortBy:=',
        'reversed:=',
        'query:=',
        'displayCount:=',
        'dropdownItems:=',
        'selectedItem:=',
        'itemFilterKeys:?'
    ]
})
export class LegacyClientPagedListComponent implements Partial<ClientPagedListScope> {
    public items: ClientPagedListItem[];
    public itemsPerPage: number;
    public totalItems: number;
    public keys: ClientPagedListColumnKey[];
    public renderers: TypedMap<() => string>;
    public injectedContext: TypedMap<(...args: []) => any>;
    public identifier: string | undefined;
    public sortBy: string;
    public reversed: boolean;
    public query: string;
    public displayCount: boolean;
    public dropdownItems: IDropdownMenuItem[];
    public selectedItem: ClientPagedListItem | undefined;
    public itemFilterKeys: string[];

    public readonly currentPage: number = 1;
    public columnWidth: number;
    public columnToggleReversed: boolean;
    public headersSortingState: TypedMap<boolean>;
    public visibleSortingHeader: string;

    constructor(private $scope: ClientPagedListScope, private $filter: angular.IFilterService) {}

    $onInit(): void {
        this.totalItems = 0;

        this.columnWidth = 100 / (this.keys.length || 1);
        this.columnToggleReversed = this.reversed;

        this.headersSortingState = {
            [this.sortBy]: this.reversed
        };
        this.visibleSortingHeader = this.sortBy;

        const orderByUnwatch = this.$scope.$watch('sortBy', () => {
            this.items = this.$filter('orderBy')(
                this.items,
                this.sortBy,
                this.columnToggleReversed
            );
            if (this.sortBy) {
                orderByUnwatch();
            }
        });

        this.$scope.$watch('items', () => {
            this.totalItems = this.items.length;
        });
    }

    public filterCallback = (filteredList: ClientPagedListItem[]): void => {
        this.totalItems = filteredList.length;
    };

    public getFilterKeys = (): string[] => this.itemFilterKeys || [];

    public orderByColumn = (columnKey: string): void => {
        this.columnToggleReversed = !this.columnToggleReversed;
        this.headersSortingState[columnKey] = this.columnToggleReversed;
        this.visibleSortingHeader = columnKey;
        this.items = this.$filter('orderBy')(this.items, columnKey, this.columnToggleReversed);
    };
}
