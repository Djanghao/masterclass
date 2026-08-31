# BEST 100% Solution

**Author:** isudakoff
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-similarity-iii/solutions/5881159/](https://leetcode.com/problems/sentence-similarity-iii/solutions/5881159/)

---

# Code
```php []
class Solution
{
    public function areSentencesSimilar(string $sentence1, string $sentence2): bool
    {
        // case 1: small is the prefix of larger
        // case 2: suffix
        // case 3: between prefix and suffix in large string

        $s1_length = strlen($sentence1);
        $s2_length = strlen($sentence2);

        if ($s1_length > $s2_length) {
            $large = $sentence1;
            $small = $sentence2;
            $sl = $s2_length;
            $ll = $s1_length;
        } else {
            $large = $sentence2;
            $small = $sentence1;
            $sl = $s1_length;
            $ll = $s2_length;
        }

        $pos = strpos($large, $small);

        // case 1
        if (
            $pos === 0 &&
            isset($large[$sl]) &&
            $large[$sl] === ' '
        ) {
            return true;
        }

        // case 2
        if (
            $pos + $sl == $ll &&
            isset($large[$pos - 1]) &&
            $large[$pos - 1] === ' '
        ) {
            return true;
        }

        // case 3
        $largeWords = explode(' ', $large);
        $smallWords = explode(' ', $small);

        $prefix = '';
        $suffix = '';
        $prefixable = true;
        $suffixable = true;

        while (!empty($smallWords)) {
            if ($prefixable) {
                $sPrefix = array_shift($smallWords);
                $lPrefix = array_shift($largeWords);

                if ($sPrefix == $lPrefix) {
                    $prefix .= ' ' . $sPrefix;
                    continue;
                } else {
                    array_unshift($smallWords, $sPrefix);
                    array_unshift($largeWords, $lPrefix);
                    $prefixable = false;
                }
            }

            if ($suffixable) {
                $sSuffix = array_pop($smallWords);
                $lSuffix = array_pop($largeWords);

                if ($sSuffix == $lSuffix) {
                    $suffix = $sSuffix . ' ' . $suffix;
                    continue;
                } else {
                    $smallWords[] = $sSuffix;
                    $largeWords[] = $lSuffix;
                    $suffixable = false;
                }
            }

            break;
        }

        if (empty($smallWords)) {
            return true;
        }

        return false;
    }
}

```