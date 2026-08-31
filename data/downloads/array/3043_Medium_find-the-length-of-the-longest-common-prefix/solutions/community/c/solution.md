# MF TOOK 37 MINS ✅✅69_BEATS_100%✅✅🔥Easy Solution🔥With Explanation🔥

**Author:** phoenix_sr
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5826248/](https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5826248/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
we need to find out the longest common prefix of any two number pair in arr1 and arr2
we have to first understand the main topic that 
SAME PREFIX NUMBERS COME TOGETHER IN LEXILOGICAL ORDER
that is why we have to convert them to string first 
after that we sort the arrays to be able to move left or right with respect to each other 
now lets find out the longest common prefix
# Approach
<!-- Describe your approach to solving the problem. -->
as i said first we convert the arrays into string and sort them in any order you like
now we have to traverse any one array while comparing the other arrays corresponding string
we will use 2 pointers to indicate which two numbers or strings are under scrutiny 
we will move these pointers according to the relation between the elements under scrutiny
we will move the i pointer if ele[i]<ele[j]
we will mpve the j pointer if ele[j]<ele[i]
we will move both if equal 

we will use a while loop to find the longest prefix and return it 
thats it 
# Complexity
- Time complexity:O(NlogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![wallhaven-l8x1pr.jpg](./images/0.jpeg)

# Code
```javascript []
var longestCommonPrefix = function (arr1, arr2) {
    arr1 = arr1.map(x => x.toString())
    arr2 = arr2.map(x => x.toString())
    arr1.sort()
    arr2.sort()
    let max = 0
    let y = 0
    for (let i = 0; i < arr1.length; i++) {
        let e1 = arr1[i]
        let e2 = arr2[y]
        if (!e1 || !e2) break
        let se = e1[0]
        if (e2[0] < se) {
            y++
            i--
            continue
        }
        else if (e2[0] > se) continue
        else {
            let ci = 0
            while (e1[ci] === e2[ci] && ci < e1.length) {
                ci++
            }
            max = Math.max(max, ci)
            if (e1 > e2) {
                y++
                i--
            }
            else if (e1 == e2) y++

        }

    }
    return max
};
```
```java []
import java.util.Arrays;

public class LongestCommonPrefix {
    public static int longestCommonPrefix(String[] arr1, String[] arr2) {
        arr1 = Arrays.stream(arr1).map(Object::toString).toArray(String[]::new);
        arr2 = Arrays.stream(arr2).map(Object::toString).toArray(String[]::new);
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        
        int max = 0;
        int y = 0;
        for (int i = 0; i < arr1.length; i++) {
            String e1 = arr1[i];
            String e2 = arr2[y];
            if (e1 == null || e2 == null) break;

            char se = e1.charAt(0);
            if (e2.charAt(0) < se) {
                y++;
                i--;
                continue;
            } else if (e2.charAt(0) > se) continue;
            else {
                int ci = 0;
                while (ci < e1.length() && ci < e2.length() && e1.charAt(ci) == e2.charAt(ci)) {
                    ci++;
                }
                max = Math.max(max, ci);
                if (e1.compareTo(e2) > 0) {
                    y++;
                    i--;
                } else if (e1.equals(e2)) y++;
            }
        }
        return max;
    }

    public static void main(String[] args) {
        String[] arr1 = {"apple", "apricot", "banana"};
        String[] arr2 = {"applesauce", "banana", "grape"};
        System.out.println(longestCommonPrefix(arr1, arr2));
    }
}

```
```python []
def longest_common_prefix(arr1, arr2):
    arr1 = list(map(str, arr1))
    arr2 = list(map(str, arr2))
    arr1.sort()
    arr2.sort()

    max_len = 0
    y = 0
    i = 0

    while i < len(arr1) and y < len(arr2):
        e1 = arr1[i]
        e2 = arr2[y]
        if not e1 or not e2:
            break

        se = e1[0]
        if e2[0] < se:
            y += 1
            continue
        elif e2[0] > se:
            i += 1
            continue
        else:
            ci = 0
            while ci < len(e1) and ci < len(e2) and e1[ci] == e2[ci]:
                ci += 1
            max_len = max(max_len, ci)
            if e1 > e2:
                y += 1
            elif e1 == e2:
                y += 1
            i += 1

    return max_len


```
``` c []

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int compare(const void *a, const void *b) {
    return strcmp(*(const char **)a, *(const char **)b);
}

int longestCommonPrefix(char **arr1, int len1, char **arr2, int len2) {
    qsort(arr1, len1, sizeof(char *), compare);
    qsort(arr2, len2, sizeof(char *), compare);
    
    int max = 0;
    int y = 0;
    for (int i = 0; i < len1; i++) {
        char *e1 = arr1[i];
        char *e2 = arr2[y];
        if (!e1 || !e2) break;

        char se = e1[0];
        if (e2[0] < se) {
            y++;
            i--;
            continue;
        } else if (e2[0] > se) continue;
        else {
            int ci = 0;
            while (e1[ci] == e2[ci] && ci < strlen(e1) && ci < strlen(e2)) {
                ci++;
            }
            if (ci > max) max = ci;
            if (strcmp(e1, e2) > 0) {
                y++;
                i--;
            } else if (strcmp(e1, e2) == 0) y++;
        }
    }
    return max;
}

int main() {
    char *arr1[] = {"apple", "apricot", "banana"};
    char *arr2[] = {"applesauce", "banana", "grape"};
    int len1 = sizeof(arr1) / sizeof(arr1[0]);
    int len2 = sizeof(arr2) / sizeof(arr2[0]);
    printf("%d\
", longestCommonPrefix(arr1, len1, arr2, len2));
    return 0;
}
```