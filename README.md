# node-folder-rsync

Simple sync of local and remote folders using rsync.

## How To Use

1. Clone or download
2. Create and `.env`-file in the root and add your SSH credentials (or you can just hardcode them into `sync.js` if you want).
  ```
  SSH_USER=<ssh username>
  SSH_HOST=<ssh host>
  ```
3. Add your `fromFolder` and `toFolder`.
4. Run `sync`,`watch` or `sync.js`directly depending on your taste, to sync the folders.
5. Done.

## License

MIT