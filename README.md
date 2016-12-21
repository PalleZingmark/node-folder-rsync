# node-folder-rsync

Simple sync of local and remote folders using rsync.

## How To Use

1. Clone or download
2. Create and `.env`-file in the root and add your SSH credentials (or you can just hardcode them into `sync.js` if you want).
3. Add your `fromFolder` and `toFolder`, default fromFolder is `./src`.
4. Run `sync`,`watch` or `sync.js`directly depending on your taste, to sync the folders.
5. Done!

### Using .env file
```
SSH_USER=<ssh username>
SSH_HOST=<ssh host>
```

## Prerequisites

To have a smooth passwordless flow, you need to have your SSH credentials already setup and ready on both your local and remote, how to do that is not covered in this repo but [here is a pretty nice article](https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys) that might help you.

## License

MIT