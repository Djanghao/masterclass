# Short Solution of C++ using stringstream & Python using re

**Author:** zqfan
**Votes:** 17
**Link:** [https://leetcode.com/problems/design-compressed-string-iterator/solutions/103855/](https://leetcode.com/problems/design-compressed-string-iterator/solutions/103855/)

---

c++ solution:
```
class StringIterator {
    istringstream iss;
    char c;
    int count;
public:
    StringIterator(string compressedString) {
        iss = istringstream(compressedString);
        count = c = 0;
    }

    char next() {
        if ( hasNext() ) {
            --count;
            return c;
        } else {
            return ' ';
        }
    }

    bool hasNext() {
        if ( count == 0 ) {
            iss >> c >> count;
        }
        return count > 0;
    }
};
```
python solution, you can use `re.finditer` instead to save some memory if you like.
```
class StringIterator(object):

    def __init__(self, compressedString):
        """
        :type compressedString: str
        """
        self.__data = re.findall(r"([a-zA-Z])(\\d+)", compressedString)
        self.__index, self.__count = -1, 0

    def next(self):
        """
        :rtype: str
        """
        if self.hasNext():
            self.__count -= 1
            return self.__data[self.__index][0]
        else:
            return ' '

    def hasNext(self):
        """
        :rtype: bool
        """
        if self.__count == 0 and self.__index + 1 < len(self.__data):
            self.__index += 1
            self.__count = int(self.__data[self.__index][1])
        return self.__count > 0
```