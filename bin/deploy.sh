#!/bin/bash
dockerrepo="nicholefrey/zensite"
if git diff-index --quiet HEAD --; then
    set -o errexit; # Exit on error
echo Step 1/3: Archiving previous production image;
    now=$(date +"%m_%d_%Y");
    docker tag $dockerrepo:latest $dockerrepo:$now;
    docker push $dockerrepo:$now;
echo Step 2/3: Creating new production image;
    npm run build:prod;
    docker push $dockerrepo;
echo Step 3/3: Creating elastic beanstalk environment;
eb $1;
else
    echo Please commit your changes first.;
fi
