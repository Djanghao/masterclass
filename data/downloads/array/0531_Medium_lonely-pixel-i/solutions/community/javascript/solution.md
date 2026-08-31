# Java | JavaScript | C++ Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/lonely-pixel-i/solutions/2675581/](https://leetcode.com/problems/lonely-pixel-i/solutions/2675581/)

---

**Java**
```
public class Solution {

    private static final char WHITE_PIXEL = 'W';
    private static final char BLACK_PIXEL = 'B';

    public int findLonelyPixel(char[][] picture) {
        int[] frequencyRows = new int[picture.length];
        int[] frequencyColumns = new int[picture[0].length];
        countFrequencyOfBlackPixels(picture, frequencyRows, frequencyColumns);
        return countNumberOfLonelyBlackPixels(picture, frequencyRows, frequencyColumns);
    }

    private void countFrequencyOfBlackPixels(char[][] picture, int[] frequencyRows, int[] frequencyColumns) {
        for (int r = 0; r < picture.length; ++r) {
            for (int c = 0; c < picture[0].length; ++c) {
                if (picture[r][c] == BLACK_PIXEL) {
                    ++frequencyRows[r];
                    ++frequencyColumns[c];
                }
            }
        }
    }

    private int countNumberOfLonelyBlackPixels(char[][] picture, int[] frequencyRows, int[] frequencyColumns) {
        int numberOfLonelyBlackPixels = 0;
        for (int r = 0; r < picture.length; ++r) {
            for (int c = 0; c < picture[0].length; ++c) {
                if (picture[r][c] == BLACK_PIXEL && frequencyRows[r] == 1 && frequencyColumns[c] == 1) {
                    ++numberOfLonelyBlackPixels;
                }
            }
        }
        return numberOfLonelyBlackPixels;
    }
}
```
**JavaScript**
```
/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function (picture) {
    this.WHITE_PIXEL = 'W';
    this.BLACK_PIXEL = 'B';
    this.frequencyRows = new Array(picture.length).fill(0);
    this.frequencyColumns = new Array(picture[0].length).fill(0);

    countFrequencyOfBlackPixels(picture, frequencyRows, frequencyColumns);
    return countNumberOfLonelyBlackPixels(picture, frequencyRows, frequencyColumns);
};

/**
 * @param {character[][]} picture
 * @param {number[]} frequencyRows 
 * @param {number[]} frequencyColumns
 * @return {void}
 */
function countFrequencyOfBlackPixels(picture, frequencyRows, frequencyColumns) {
    for (let r = 0; r < picture.length; ++r) {
        for (let c = 0; c < picture[0].length; ++c) {
            if (picture[r][c] === this.BLACK_PIXEL) {
                ++frequencyRows[r];
                ++frequencyColumns[c];
            }
        }
    }
}

/**
 * @param {character[][]} picture
 * @param {number[]} frequencyRows 
 * @param {number[]} frequencyColumns
 * @return {number}
 */
function countNumberOfLonelyBlackPixels(picture, frequencyRows, frequencyColumns) {
    let numberOfLonelyBlackPixels = 0;
    for (let r = 0; r < picture.length; ++r) {
        for (let c = 0; c < picture[0].length; ++c) {
            if (picture[r][c] === this.BLACK_PIXEL && frequencyRows[r] === 1 && frequencyColumns[c] === 1) {
                ++numberOfLonelyBlackPixels;
            }
        }
    }
    return numberOfLonelyBlackPixels;
}
```
**C++**
```
#include <vector>
using namespace std;

class Solution {
    
    inline static const char WHITE_PIXEL = 'W';
    inline static const char BLACK_PIXEL = 'B';

public:
    int findLonelyPixel(vector<vector<char>>&picture) {
        vector<int> frequencyRows(picture.size());
        vector<int> frequencyColumns(picture[0].size());
        countFrequencyOfBlackPixels(picture, frequencyRows, frequencyColumns);
        return countNumberOfLonelyBlackPixels(picture, frequencyRows, frequencyColumns);
    }

private:
    void countFrequencyOfBlackPixels(const vector<vector<char>>&picture, vector<int>& frequencyRows, vector<int>& frequencyColumns) const {
        for (int r = 0; r < picture.size(); ++r) {
            for (int c = 0; c < picture[0].size(); ++c) {
                if (picture[r][c] == BLACK_PIXEL) {
                    ++frequencyRows[r];
                    ++frequencyColumns[c];
                }
            }
        }
    }

    int countNumberOfLonelyBlackPixels(const vector<vector<char>>&picture, const vector<int>& frequencyRows, const vector<int>& frequencyColumns) const {
        int numberOfLonelyBlackPixels = 0;
        for (int r = 0; r < picture.size(); ++r) {
            for (int c = 0; c < picture[0].size(); ++c) {
                if (picture[r][c] == BLACK_PIXEL && frequencyRows[r] == 1 && frequencyColumns[c] == 1) {
                    ++numberOfLonelyBlackPixels;
                }
            }
        }
        return numberOfLonelyBlackPixels;
    }
};
```