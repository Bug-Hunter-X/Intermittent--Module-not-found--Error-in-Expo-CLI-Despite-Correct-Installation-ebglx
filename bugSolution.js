The solution involves thoroughly cleaning the project's cache and reinstalling packages.  Sometimes, simply reinstalling the package doesn't fix the problem, so further steps are required to clear out any lingering issues. Try these steps:

1. **Clear the cache:**
   ```bash
   expo prebuild --clean
   rm -rf node_modules
   rm -rf .expo
   expo cache:clear
   ```

2. **Reinstall packages:**
   ```bash
   npm install
   ```

3. **Verify the installation:** Check your `node_modules` directory to verify that the necessary modules are installed.

4. **Restart the development server:** After the reinstallation, restart the Expo development server to ensure the changes are applied.

5. (If still not working) Ensure that your `package.json` and `package-lock.json` are consistent.
   ```bash
   npm install --force
   ```

If the problem persists after these steps, there might be additional project-specific issues to resolve.  You may need to create a new project to determine if the problem is with the project setup or the Expo CLI itself.