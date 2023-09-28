#!/bin/bash

set -e

mongosh <<EOF
use admin;
db.createUser({
  user: '$MONGO_DB_ADMIN_USERNAME',
  pwd: '$MONGO_DB_ADMIN_PASSWORD',
  roles: [{
    role: "userAdminAnyDatabase",
    db: "admin"
  }]
});
use cjsite;
db.createUser({
  user: '$MONGO_DB_USERNAME',
  pwd: '$MONGO_DB_PASSWORD',
  roles: [{
    role: "readWrite",
    db: "cjsite"
  }]
});
EOF