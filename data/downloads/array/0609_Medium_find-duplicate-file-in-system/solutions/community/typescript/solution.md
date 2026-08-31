# Typescript | Javascript Easy Solution, Explained

**Author:** nhandqDev
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-duplicate-file-in-system/solutions/2595697/](https://leetcode.com/problems/find-duplicate-file-in-system/solutions/2595697/)

---

The ideal was simple. 
* Travel throught the Paths, split it to `root` and `files` 
* Then agian travel throught the `files` split to take the `fileName` and `content` 
* Store the `fullPath` (`root` + '/' + 'fileName') in the set with `content` as a key
* If that set (key by `content`) had more than 1 item then its should be store as `result`
* Final return the values only of `result` object.

```
function findDuplicate(paths: string[]): string[][] {
    let allPath: {[key in string]?: string[]} = {};
    let res: {[key in string]?: string[]} = {};

    for (const path of paths) {
        const [root, ...files] = path.split(' ');
        
		for (const file of files) {
            const contentStartIn: number = file.indexOf('(');
            const content = file.slice(contentStartIn+1, file.length-1);
            
			if (allPath[content]) {
                allPath[content].push(root+'/'+file.slice(0,contentStartIn));
                res[content] = allPath[content];
            } else {
                allPath[content] = [root+'/'+file.slice(0,contentStartIn)];
            }
        }
    }

    return Object.values(res);
};
```
```
Runtime: 210 ms
Memory Usage: 58.6 MB
```
Please, leave a vote if this was help you.