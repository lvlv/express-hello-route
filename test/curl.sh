for login in $(cat logins.txt)
    do
        echo $(curl "localhost:3131/hello/$login")
done