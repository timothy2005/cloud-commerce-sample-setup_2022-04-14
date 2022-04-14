/**
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 * @module smartutils
 */
export declare abstract class IAuthenticationManagerService {
    abstract onLogout(): void;
    abstract onUserHasChanged(): void;
}
