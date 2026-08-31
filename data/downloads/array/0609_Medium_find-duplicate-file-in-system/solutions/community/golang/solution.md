# Go, hashmap with content and filespath

**Author:** krokop
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-duplicate-file-in-system/solutions/2596477/](https://leetcode.com/problems/find-duplicate-file-in-system/solutions/2596477/)

---

```
func findDuplicate(paths []string) [][]string {
	var duplicates = [][]string{}
	var contentMap = make(map[string][]string)
	var filename string
	var content string
	var rootRe = regexp.MustCompile(`^[A-Za-z0\\/]+`)
	var contentFileNames = regexp.MustCompile(`([a-zA-Z\\.0-9]+)\\(([a-z]+)\\)`)
	for _, path := range paths {
		root := rootRe.FindString(path)
		files := contentFileNames.FindAllStringSubmatch(path, -1)
		for _, subMatch := range files {
			filename = subMatch[1]
			content = subMatch[2]
			filePath := root + "/" + filename
			if _, ok := contentMap[content]; ok {
				contentMap[content] = append(contentMap[content], filePath)
			} else {
				contentMap[content] = []string{filePath}
			}
		}
	}
	for _, filesPath := range contentMap {
		if len(filesPath) > 1 {
			duplicates = append(duplicates, filesPath)
		}
	}
	return duplicates
}
```