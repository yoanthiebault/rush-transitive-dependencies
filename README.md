Run:

    rush update
    
    rush build
    
And you get the following errors in `./packages/my-app/my-app.build.log`

    ERROR in [at-loader] ./node_modules/@types/react/index.d.ts:33:22 
        TS2307: Cannot find module 'csstype'.
    
    ERROR in [at-loader] ./node_modules/@types/react/index.d.ts:34:28 
        TS2307: Cannot find module 'prop-types'.