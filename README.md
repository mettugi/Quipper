How to Install Cypress please follow this link:
https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements

System requirements
Operating System

Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems:

    macOS 10.9 and above (64-bit only)
    Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
    Windows 7 and above (64-bit only)

Node.js

If you're using npm to install Cypress, we support:

    Node.js 12 or 14 and above

Linux

If you're using Linux, you'll want to have the required dependencies installed on your system.
Ubuntu/Debian

apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

CentOS

yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib

Docker

Docker images with all of the required dependencies installed are available under cypress/base

If you're running your projects in containers, then you'll want Cypress in the container with the Node.js process.

  ui:
    image: cypress/base:latest
    # if targeting a specific node version, use e.g.
    # image: cypress/base:14

cypress/base is a drop-in replacement for base docker node images.


Installing
npm install

Install Cypress via npm:

cd /your/project/path

npm install cypress --save-dev

This will install Cypress locally as a dev dependency for your project.

Make sure that you have already run npm init or have a node_modules folder or package.json file in the root of your project to ensure cypress is installed in the correct directory.

Notice that the Cypress npm package is a wrapper around the Cypress binary. The version of the npm package determines the version of the binary downloaded. As of version 3.0, the binary is downloaded to a global cache directory to be used across projects.

System proxy properties http_proxy, https_proxy and no_proxy are respected for the download of the Cypress binary. You can also use the npm properties npm_config_proxy and npm_config_https_proxy. Those have lower priority, so they will only be used if the system properties are being resolved to not use a proxy.

Best Practice

The recommended approach is to install Cypress with npm because :

    Cypress is versioned like any other dependency.
    It simplifies running Cypress in Continuous Integration.

yarn add

Installing Cypress via yarn:

cd /your/project/path

yarn add cypress --dev

System proxy properties http_proxy, https_proxy and no_proxy are respected for the download of the Cypress binary.

Opening Cypress

If you used npm to install, Cypress has now been installed to your ./node_modules directory, with its binary executable accessible from ./node_modules/.bin.

Now you can open Cypress from your project root one of the following ways:

The long way with the full path

./node_modules/.bin/cypress open

Or with the shortcut using npm bin

$(npm bin)/cypress open

Or by using npx

note: npx is included with npm > v5.2 or can be installed separately.

npx cypress open

Or by using yarn

yarn run cypress open

After a moment, the Cypress Test Runner will launch.
