# 100% beats runtime/memory in typescript

**Author:** salisbury-espinosa
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5825834/](https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5825834/)

---

![typescript.png](./images/0.png)

# Code
```typescript []
function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    const cache = new Set();
    let result = 0;
    for (let num of arr1) {
        while (num > 0) {
            cache.add(num);
            num = Math.floor(num/10);
        }
    }
    for (let num of arr2) {
        let currentLen = `${num}`.length;
        while (num > 0 && currentLen > result) {
            if (cache.has(num)) {
                result = currentLen;
            }
            num = Math.floor(num/10);
            currentLen -= 1;
        }
    }
    return result;
};
```
```java []
class Solution {
    public int longestCommonPrefix(int[] arr1, int[] arr2) {
        HashSet<Integer> cache = new HashSet<>();
        int result = 0;
        
        for (int num : arr1) {
            while (num > 0) {
                cache.add(num);
                num = num / 10;
            }
        }
        
        for (int num : arr2) {
            int currentLen = String.valueOf(num).length();
            while (num > 0 && currentLen > result) {
                if (cache.contains(num)) {
                    result = currentLen;
                }
                num = num / 10;
                currentLen -= 1;
            }
        }
        
        return result;
    }
}
```
```PHP []
class Solution {

    /**
     * @param Integer[] $arr1
     * @param Integer[] $arr2
     * @return Integer
     */
    function longestCommonPrefix($arr1, $arr2) {
        $cache = [];
        $result = 0;
        
        foreach ($arr1 as $num) {
            while ($num > 0) {
                $cache[$num] = true;
                $num = intval($num / 10);
            }
        }
        
        foreach ($arr2 as $num) {
            $currentLen = strlen((string)$num);
            while ($num > 0 && $currentLen > $result) {
                if (isset($cache[$num])) {
                    $result = $currentLen;
                }
                $num = intval($num / 10);
                $currentLen -= 1;
            }
        }
        
        return $result;
    }
}
```