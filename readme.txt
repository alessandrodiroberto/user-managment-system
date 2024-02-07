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

** use bootstrap from CDN
    ->
** use bootstrap from package
    ->npm install bootstrap@5.3.2
    ->npm i bootstrap-icons
    ->go to angulare.json
        ->add under options/styles:
            ->"./node_modules/bootstrap/dist/css/bootstrap.css",
            ->"./node_modules/bootstrap-icons/font/bootstrap-icons.css"
        ->remove css http reference from index.html page
        