#!/bin/bash
dockerrepo="nicholefrey/zensite"
awsapp="zensite"
if git diff-index --quiet HEAD --; then
    set -o errexit; # Exit on error
echo Step 1/4: Creating production build;
    npm run deploy:prod;
echo Step 2/4: Archiving previous production image;
    now=$(date +"%m_%d_%Y");
    docker tag $dockerrepo:latest $dockerrepo:$now;
    docker push $dockerrepo:$now;
echo Step 3/4: Creating new production image;
    npm run build:prod;
    docker push $dockerrepo;
echo Step 4/4: Creating elastic beanstalk environment;
eb $1 $awsapp;
else
    echo Please commit your changes first.;
fi
