# Bare Bones Starter Kit

This is a pretty bare bones starter kit. It does have support for mocha and linting. None of the linting or testing is run automatically. While there is a .travis.yml file it doesn't have to do anything. See the alm-starter-kit (Application Life Cycle management) for a more comprehensive Continuous Deployment approach.

## First steps
Clone this repo into your dev folder and then rename the folder basic-starter-kit to the name of your project.  
Clone via ssh using  
`git clone git@github.com:Rolias/basic-starter-kit.git`  
using https  
`git clone https://github.com/Rolias/basic-starter-kit.git`  

Then modify the package.json file to refer to your package. Change the name, keywords,  and any other fields.

## Basic Git Stuff

Then create a new repo up in GitHub (don't create the readme). Keep the page open so you can copy and paste the lines for add the origin and doing the push.  
**But don't do it yet.**
First do a:

```bash
git remote remove origin
```

You should also overwrite the repository section in your package.json to refer to have your git username and the name of your repo. You can do this later.

``` JSON
"repository":{
      "type": "git",
    "url": "git@github.com:<userName>/<repo-name.git>"
},
```

Now you can run the commands that github gave you for `add origin` and the push. 

After those two commands are run, VScode can do push and pull and your git folder will have updated its `config` file with the `[remote "origin"]` section.

Finally do an `npm install`
to install all the packages in the package.json

## Dependencies

The only dependency for the non-development side is winston for logging.  
Packages all use "x" for the semver flag so on a new project the latest versions will get pulled in.
