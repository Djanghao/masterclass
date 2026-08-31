# Very simple and concise solution with explanation

**Author:** emmakuen
**Votes:** 10
**Link:** [https://leetcode.com/problems/simplify-path/solutions/3406723/](https://leetcode.com/problems/simplify-path/solutions/3406723/)

---

## Approach 

In a Unix-style file system, a period `.` refers to the current directory and a double period `..` refers to the directory up a level. For example, if we are in the directory /a/b/c/d and we want to go up one level, we can use `..` to get to /a/b/c.

The simplified canonical path should start with a single slash `/`, and any two directories should be separated by a single slash `/`. It should not end with a trailing slash `/`, and it should not contain any periods `.` or double periods `..`.

To achieve this, the given solution first creates an empty array called `simplifiedPath` to store the simplified path. It then splits the input `path` into individual directories using the forward slash `/` as a separator, and stores them in an array called `dirs`.

The function then goes through each directory in the `dirs` array using a `for...of` loop. If the directory is an empty string or a period `.`, it skips over it and moves to the next directory. If the directory is a double period `..`, it removes the last directory added to the `simplifiedPath` array using the `pop()` method, effectively moving up one level. If the directory is anything else, it adds it to the `simplifiedPath` array.

Finally, the function joins all the directories in the `simplifiedPath` array using the forward slash `/` as a separator, and concatenates it with a single slash `/` at the beginning to create the simplified canonical path. The resulting path is then returned as a string.

## JavaScript Solution
```
var simplifyPath = function (path) {
  const simplifiedPath = [];
  const dirs = path.split("/");

  for (const dir of dirs) {
    if (dir === "" || dir === ".") continue;
    dir === ".." ? simplifiedPath.pop() : simplifiedPath.push(dir);
  }

  return "/" + simplifiedPath.join("/");
};

```

## Go Solution
```go
import "strings"

func simplifyPath(path string) string {
	simplifiedPath := make([]string, 0)
	dirs := strings.Split(path, "/")

	for _, dir := range dirs {
		if dir == "" || dir == "." { continue }
		if dir != ".." {
			simplifiedPath = append(simplifiedPath, dir)
		} else if len(simplifiedPath) > 0 {
			simplifiedPath = simplifiedPath[:len(simplifiedPath)-1]
		}
	}

	return "/" + strings.Join(simplifiedPath, "/")
}
```

## Rust Solution
```rust
impl Solution {
    pub fn simplify_path(path: String) -> String {
        let mut simplified_path = vec![];
        for dir in path.split('/') {
            match dir {
                "" | "." => continue,
                ".." => { simplified_path.pop(); }
                _ => simplified_path.push(dir),
            }
        }

        "/".to_owned() + &simplified_path.join("/")
    }
}
```