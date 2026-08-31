# Runtime: 83 ms / Memory Usage: 34.6 MB

**Author:** ordinary9843
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-duplicate-file-in-system/solutions/2595114/](https://leetcode.com/problems/find-duplicate-file-in-system/solutions/2595114/)

---

Runtime: 83 ms, faster than 100.00% of PHP online submissions for Find Duplicate File in System.
Memory Usage: 34.6 MB, less than 50.00% of PHP online submissions for Find Duplicate File in System.

```
class Solution {

    /**
     * @param String[] $paths
     * @return String[][]
     */
    function findDuplicate($paths) {
        $res = [];
        foreach ($paths as $path) {
            $pathInfo = explode(' ', $path);
            $root = $pathInfo[0];
            for ($i = 1; $i <= count($pathInfo) - 1; $i++) {
                preg_match('/\\(.*\\)/i', $pathInfo[$i], $match);
                $filePath = str_replace($match[0], '', $pathInfo[$i]);
                ($match[0]) && $res[$match[0]][] = $root . '/' . $filePath;
            }
        }
        
        foreach ($res as $key => $val) {
            if (count($val) < 2) {
                unset($res[$key]);
            }
        }

        return $res;
    }
}
```