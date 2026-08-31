# Simple solution

**Author:** nimra725m
**Votes:** 3
**Link:** [https://leetcode.com/problems/simplify-path/solutions/3409708/](https://leetcode.com/problems/simplify-path/solutions/3409708/)

---

# Approach
This problem can be solved using only one loop. Firstly, one needs to identify that we need to get directories first and store them in an array so that we can generate our path using it. 
1) Spliting the path and converting into array using simple .split method will return all the directories in the path including `.` and `..`
2) Store your generated path in a stack, so that if a special command e.g `..` is entered we simple remove the last directory from the stack or stay on the same directory for `.` and loop over 
3) for directory name simple keep pushing it in stack

# Code
```
# @param {String} path
# @return {String}
def simplify_path(path)
    result = []
    directories = path.split('/') 
    directories.each_with_index do |dir, index|
        if dir.eql?('.') or dir.eql?('')
            next
        elsif dir.eql?('..')
            result.pop() if result.length > 0
        else
            result << dir
        end
    end
    '/' + result.join('/')
end
```