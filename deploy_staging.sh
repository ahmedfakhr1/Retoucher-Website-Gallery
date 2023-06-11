#!/bin/bash
trap "exit" INT
firebase use my_project_name
until firebase deploy  --only hosting:my_project; do
  echo Transfer disrupted, retrying in 3 seconds...
  sleep 3
done
