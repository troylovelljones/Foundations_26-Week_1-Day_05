/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const GIT_DEFINITION = `GIT is open source software used for storing, 
sharing, and tracking changes in any set of files during software development.`;


//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const GIT_HUB_DEFINITION = `GitHub, Inc. is a provider of Internet hosting for software 
    development and version control using Git. 
    It offers the distributed version control and 
    source code management (SCM) functionality of Git`
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const GIT_INIT_DEFINITION = `This command creates an empty Git repository.`;
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const GIT_CLONE_DEFINITION = `Clones a repository into a newly created directory, 
    creates remote-tracking branches for each branch in the cloned repository
    and creates and checks out an initial branchthat is forked from the cloned 
    repository’s currently active branch.`;

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const GIT_STATUS_DEFINITION = `The git status command displays the state of the working directory and the 
    staging area. It lets you see which changes have been staged, which haven't, 
    and which files aren't being tracked by Git`;
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const GET_ADD_DEFINITION = `The git add command adds a change in the working directory to the staging area. 
    It tells Git that you want to include updates to a particular file in the next commit`;

const GET_ADD_CODE_DEFINITION = `git add --A`    
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

const GIT_COMMIT_DEFINITION = `This command creates a new commit containing the current contents of the
    index and the given log message describing the changes.  This command basically captures a snapshot of 
    the your project's currently staged changes in the local repository`;

const GIT_COMMIT_CODE_DEFINITION = `git commit -m "initial commit"`;    


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

const GIT_PUSH_DEFINITION = `The git push command uploads the local repository content 
    to a remote repository. Pushing is how you transfer commits from your local repository
    to a remote repo`;