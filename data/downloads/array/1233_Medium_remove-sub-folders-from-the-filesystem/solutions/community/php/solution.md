# Sort and Destroy

**Author:** J22qIDYZa7
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/solutions/5964694/](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/solutions/5964694/)

---

# Code
```php []
class Solution {

    /**
     * @param String[] $folder
     * @return String[]
     */
    function removeSubfolders($folder) {
        sort($folder);

        $last = '#';
        foreach($folder as $key => $subFolder){
            if(strpos($subFolder, $last.'/') === 0){
                unset($folder[$key]);
                continue;
            }
            $last = $subFolder;
        }

        return $folder;
    }
}
```