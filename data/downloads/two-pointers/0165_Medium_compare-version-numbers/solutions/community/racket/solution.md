# ✅ super easy to understand

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/compare-version-numbers/solutions/5107922/](https://leetcode.com/problems/compare-version-numbers/solutions/5107922/)

---


# Code
``` java []
class Solution {
    public int compareVersion(String version1, String version2) {
        String[] ver1 = version1.split("\\\\.");
        String[] ver2 = version2.split("\\\\.");

        for (int i = 0; i < Math.max(ver1.length, ver2.length); i++) {
            int val1 = i < ver1.length ? Integer.parseInt(ver1[i]) : 0;
            int val2 = i < ver2.length ? Integer.parseInt(ver2[i]) : 0;

            if (val1 < val2) {
                return -1;
            } else if (val1 > val2) {
                return 1;
            }
        }

        return 0;
    }
}
```
``` python []
class Solution(object):
    def compareVersion(self, version1, version2):
        ver1 = version1.split('.')
        ver2 = version2.split('.')
        for i in range(max(len(ver1), len(ver2))):
            val1 = int(ver1[i]) if i < len(ver1) else 0
            val2 = int(ver2[i]) if i < len(ver2) else 0

            if val1 < val2:
                return -1
            elif val1 > val2:
                return 1
        return 0
```
``` javascript []
var compareVersion = function(version1, version2) {
    const ver1 = version1.split('.');
    const ver2 = version2.split('.');

    for (var i = 0; i < Math.max(ver1.length, ver2.length); i++) {
        var val1 = i < ver1.length ? Number.parseInt(ver1[i]) : 0;
        var val2 = i < ver2.length ? Number.parseInt(ver2[i]) : 0; 

        if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        }
    }

    return 0;
};
```
``` php []
class Solution {
    function compareVersion($version1, $version2) {
        $ver1 = explode('.', $version1);
        $ver2 = explode('.', $version2);

        for ($i = 0; $i < max(count($ver1), count($ver2)); $i++) {
            $val1 = $i < count($ver1) ? intval($ver1[$i]) : 0;
            $val2 = $i < count($ver2) ? intval($ver2[$i]) : 0;

            if ($val1 < $val2) {
                return -1;
            } else if ($val1 > $val2) {
                return 1;
            }

        }

        return 0;
    }
}
```
``` golang []
func getValue(i int, arr []string) int {
    if i < len(arr) {
        val, _ := strconv.Atoi(arr[i]) 
        return val
    }

    return 0
}

func compareVersion(version1 string, version2 string) int {
    ver1 := strings.Split(version1, ".")
    ver2 := strings.Split(version2, ".")

    for i := 0; i < max(len(ver1), len(ver2)); i++ {
        val1 := getValue(i, ver1)
        val2 := getValue(i, ver2)

        if val1 < val2 {
            return -1
        } else if val1 > val2 {
            return 1
        }
    }

    return 0
}
```
``` ruby []
def compare_version(version1, version2)
    ver1 = version1.split(".")
    ver2 = version2.split(".")

    [ver1.length, ver2.length].max.times do |i|
        val1 = i < ver1.length ? ver1[i].to_i  : 0
        val2 = i < ver2.length ? ver2[i].to_i  : 0

        if val1 < val2
            return -1
        elsif val1 > val2
            return 1
        end
    end

    return 0
end
```
``` racket []
(define (compare-version version1 version2)
    (let loop ([ver1 (string-split version1 ".")]
               [ver2 (string-split version2 ".")])
        (let ([val1 (if (null? ver1) 0 (string->number (car ver1)))]
              [val2 (if (null? ver2) 0 (string->number (car ver2)))])
            (cond [(and (null? ver1) (null? ver2)) 0]
                  [(< val1 val2) -1]
                  [(> val1 val2) 1]
                  [else (loop 
                            (if (null? ver1) ver1 (cdr ver1)) 
                            (if (null? ver2) ver2 (cdr ver2)))]))))
        
```