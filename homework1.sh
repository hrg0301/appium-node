#!/bin/bash

host="abc"
port=5555

# check if port is open
nc -z "$host" "$port"

if [ $? -eq 0 ]; then
	  echo "Port $port on host $host is open."
  else
	    echo "Port $port on host $host is closed."
	      # open the port using iptables
	        iptables -A INPUT -p tcp --dport "$port" -j ACCEPT
fi

