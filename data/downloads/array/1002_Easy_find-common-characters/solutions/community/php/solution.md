# ✅ simple solution

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-common-characters/solutions/5752272/](https://leetcode.com/problems/find-common-characters/solutions/5752272/)

---

1. make a function to calculate the count of each character in a word
2. make a function to merge the counts of two words (use min() function to determinate count of a character)
3. calc count for the first word
4. merge the count in the circle 
5. make the final array based on the count 

# Code
```java []
class Solution {
    private int[] count(String word) {
        int[] curCount = new int[26];
        char[] buff = word.toCharArray();
        for (int i = 0; i < buff.length; i++) {
            int ch = buff[i] - 'a';
            curCount[ch]++;
        }

        return curCount;
    }

    private void merge(int[] charCount, int[] curCount) {
        for (int i = 0; i < 26; i++) {
            charCount[i] = Math.min(curCount[i], charCount[i]);
        }
    }

    public List<String> commonChars(String[] words) {
        int[] charCount = count(words[0]);
        for (int i = 1; i < words.length; i++) {
            merge(charCount, count(words[i]));
        }

        List<String> res = new ArrayList<>(26);
        for (int i = 0; i < 26; i++) {
            for (int j = 0; j < charCount[i]; j++) {
                res.add(new String(new char[] {(char) (i + 'a')}));
            }
        }

        return res;
    }
}
```
``` python []
class Solution(object):
    def commonChars(self, words):
        def count(word):
            return Counter(word)
        def merge(charCounter, curCounter):
            counter = {}
            for ch in charCounter.keys():
                counter[ch] = min(charCounter[ch], curCounter[ch])
            return counter
        
        charCounter = count(words[0])
        for i in range(1, len(words)):
            charCounter = merge(charCounter, count(words[i]))
        
        res = []
        for ch, count in charCounter.items():
            for _ in range(count):
                res.append(ch)
        return res
```
``` c []
const int SIZE = 'z' - 'A' + 1;

void count(char* word, int* buff) {
    fill0(buff);
    int n = strlen(word);
    for (int i = 0; i < n; i++) {
        buff[word[i] - 'A']++;
    }
}

void fill0(int* buff) {
    memset(buff, 0, SIZE * sizeof(*buff));
}

char *str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\\\]^_`abcdefghijklmnopqrstuvwxyz";

void merge(int* buff1, int* buff2) {
    for (int i = 0; i < SIZE; i++) {
        if (buff1[i] > buff2[i]) {
            buff1[i] = buff2[i];
        }
    }
}

char ** commonChars(char ** words, int wordsSize, int* returnSize){
    int* charCount = malloc(SIZE * sizeof(int));
    int* tmpCount = malloc(SIZE * sizeof(int));
    count(words[0], charCount);

    for (int i = 1; i < wordsSize; i++) {
        count(words[i], tmpCount);
        merge(charCount, tmpCount);
    }

    char** res = malloc(1000 * sizeof(char*));
    *returnSize = 0;

    for (int i = 0; i < SIZE; i++) {
        if (charCount[i] > 0) {
            for (int j = 0; j < charCount[i]; j++) {
                res[*returnSize] = malloc(2 * sizeof(char));
                res[*returnSize][0] = str[i];
                res[*returnSize][1] = 0;
                (*returnSize)++;
            }           
        }
    }

    free(charCount);
    free(tmpCount);

    return res;
}
```
``` cpp []
class Solution {
private:
    void count(vector<int>& rs, string word) {
        fill(rs.begin(), rs.end(), 0);
        for (int i = 0; i < word.size(); i++) {
            rs[word[i] - 97]++;
        }
    }

    void merge(vector<int>& rs, vector<int>& val) {
        for (int i = 0; i < rs.size(); i++) {
            rs[i] = fmin(rs[i], val[i]);
        }
    }
public:
    vector<string> commonChars(vector<string>& words) {
        const int SIZE = 'z' - 'A' + 1;
        vector<int> charMap(SIZE);
        vector<int> tmpMap(SIZE);

        count(charMap, words[0]);
        for (int i = 1; i < words.size(); i++) {
            count(tmpMap, words[i]);
            merge(charMap, tmpMap);
        }

        vector<string> rs(0);
        for (int i = 0; i < charMap.size(); i++) {
            for (int j = 0; j < charMap[i]; j++) {
                rs.push_back(string(1, i + 'a'));
            }
        }

        return rs;
    }
};
```
``` javascript []
var commonChars = function(words) {
    var count = function(word) {
        var charCount = Array(26).fill(0);
        for (var i = 0; i < word.length; i++) {
            charCount[word.charCodeAt(i) - 97]++;
        }

        return charCount;
    }; 

    var merge = function(aCount, bCount) {
        for (var i = 0; i < aCount.length; i++) {
            aCount[i] = Math.min(aCount[i], bCount[i]);
        }
    };

    var chCount = count(words[0]);

    for (var i = 1; i < words.length; i++) {
        merge(chCount, count(words[i]));
    }

    var res = [];

    for (var i = 0; i < chCount.length; i++) {
        if (chCount[i] > 0) {
            for (var j = 0; j < chCount[i]; j++) {
                res.push(String.fromCharCode(i + 97));
            }
        }
    }

    return res;
};
```
``` php []
class Solution {
    function merge(&$arr1, $arr2) {
        for ($i = 97; $i <= 122; $i++) {
            $arr1[$i] = min($arr1[$i], $arr2[$i]);
        }
    }

    function commonChars($words) {
        $charCount = count_chars($words[0]);
        for ($i = 1; $i < count($words); $i++) {
            $this->merge($charCount, count_chars($words[$i]));
        }

        $res = [];
        foreach ($charCount as $ch => $count) {
            if ($count > 0) {
                array_push($res, ...array_fill(0, $count, chr($ch)));
            }
        }

        return $res;
    }
}
```
``` golang []
func count(word string) []int {
    freq := make([]int, int('z') - int('a') + 1)
    for _, ch := range word {
        freq[int(ch) - int('a')] += 1
    }  

    return freq  
}

func merge(freq []int, freq2 []int) {
    for i := 0; i < len(freq); i++ {
        if (freq[i] > freq2[i]) {
            freq[i] = freq2[i];
        }
    }
}

func commonChars(words []string) []string {
    freq := count(words[0])

    for i := 1; i < len(words); i++ {
        merge(freq, count(words[i]))
    }

    rs := make([]string, 0)

    for i, count := range freq {
        for j := 0; j < count; j++ {
            rs = append(rs, string(i + int('a')))
        }
    }

    return rs
}
```
``` ruby []
def count(word)
    rs = Hash.new(0)
    word.chars.each do |ch|
        rs[ch] += 1
    end
    return rs
end

def merge(rs, charMap)
    rs.each do |key, value|
        rs[key] = [value, charMap[key]].min()
    end
end

def common_chars(words)
    charMap = count(words[0])
    (1..words.length() - 1).each do |i|
        merge(charMap, count(words[i]))
    end

    rs = []
    charMap.each do |key, value|
        value.times {|x| rs.push(key)}
    end

    return rs
end
```
``` kotlin []
class Solution {
    fun count(word: String): IntArray {
        val freq = IntArray(26) { 0 }
        for (ch in word) {
            freq[ch - 'a'] += 1
        }

        return freq
    }

    fun merge(freq: IntArray, freq2: IntArray): IntArray {
        for (i in 0 until 26) {
            freq[i] = min(freq[i], freq2[i])
        }

        return freq
    }

    fun commonChars(words: Array<String>): List<String> {
        var freq = count(words[0])

        for (i in 1 until words.size) {
            freq = merge(freq, count(words[i]))
        }

        val rs = ArrayList<String>()

        for (i in 0 until freq.size) {
            for (j in 0 until freq[i]) {
                rs.add(('a' + i).toString())
            }
        }

        return rs
    }
}
```
``` racket []
(define (common-chars words)
  (define (count word) (foldl 
                        (lambda (x acc) (hash-set acc x (add1 (hash-ref acc x 0)))) 
                        (make-immutable-hash) 
                        (string->list word)))
  (define (merge item1 item2) (hash-map/copy
                               item1
                               (lambda (k v) (values k (min v (hash-ref item2 k 0))))))
  (define (compose freq)
    (flatten (hash-map freq
              (lambda (k v)
                (for/list ([i (in-range v)]) (string k))))))
  (let loop ([freq (count (car words))]
             [items (cdr words)])
    (cond
      [(null? items) (compose freq)]
      [else (loop
             (merge freq (count (car items)))
             (cdr items))])))
```

\uD83D\uDC4D