** NgModule
ng new ums --standalone=false --style=css --ssr

** Standalone
ng new ums --style=css --ssr

** create new component
    -> add src/users/users.components.ts file

** genera moduli
    ->ng g module --help
    ->ng g m users --force --routing=true (crea un modulo nella cartella users e se esiste, sovrascrive)
** genera componenti
    ->ng g c --help
    ->ng g c users --standalone=false -m=users --force (genera un componente al modulo users)
** genera un servizio
    ->ng g s users-list/userService