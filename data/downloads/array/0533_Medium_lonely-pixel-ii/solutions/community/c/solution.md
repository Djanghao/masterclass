# Java | JavaScript | C++ Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/lonely-pixel-ii/solutions/2688493/](https://leetcode.com/problems/lonely-pixel-ii/solutions/2688493/)

---

**Java**
```
import java.util.BitSet;

public class Solution {

    private static final char WHITE_PIXEL = 'W';
    private static final char BLACK_PIXEL = 'B';
    private BitSet[] bitStampBlackPixelForRows;
    private int[] frequencyBlackPixelForColumns;
    private int rows;
    private int columns;

    public int findBlackPixel(char[][] picture, int target) {
        rows = picture.length;
        columns = picture[0].length;
        initializeBitsetArray(picture);
        initializeFrequencyArray(picture);
        return countLonelyBlackPixels(picture, target);
    }

    private int countLonelyBlackPixels(char[][] picture, int target) {
        int numberOfLonelyBlackPixels = 0;
        for (int c = 0; c < columns; ++c) {
            if (frequencyBlackPixelForColumns[c] != target) {
                continue;
            }
            for (int r = 0; r < rows; ++r) {
                if (picture[r][c] == BLACK_PIXEL && bitStampBlackPixelForRows[r].cardinality() == target) {
                    numberOfLonelyBlackPixels += rowsAreEqual(r, bitStampBlackPixelForRows[r]) ? target : 0;
                    break;
                }
            }
        }
        return numberOfLonelyBlackPixels;
    }

    private boolean rowsAreEqual(int row, BitSet bitStampRow) {
        int countMatches = 0;
        for (int r = row; r < rows; ++r) {
            if (bitStampBlackPixelForRows[r].equals(bitStampRow)) {
                ++countMatches;
            }
        }
        return countMatches == bitStampRow.cardinality();
    }

    private void initializeBitsetArray(char[][] picture) {
        bitStampBlackPixelForRows = new BitSet[rows];
        for (int r = 0; r < rows; ++r) {
            bitStampBlackPixelForRows[r] = new BitSet(columns);
            for (int c = 0; c < columns; ++c) {
                if (picture[r][c] == BLACK_PIXEL) {
                    bitStampBlackPixelForRows[r].set(c);
                }
            }
        }
    }

    private void initializeFrequencyArray(char[][] picture) {
        frequencyBlackPixelForColumns = new int[columns];
        for (int r = 0; r < rows; ++r) {
            for (int c = 0; c < columns; ++c) {
                if (picture[r][c] == BLACK_PIXEL) {
                    ++frequencyBlackPixelForColumns[c];
                }
            }
        }
    }
}
```
**JavaScript**
```
/**
 * @param {character[][]} picture
 * @param {number} target
 * @return {number}
 */
var findBlackPixel = function (picture, target) {
    this.WHITE_PIXEL = 'W';
    this.BLACK_PIXEL = 'B';
    this.rows = picture.length;
    this.columns = picture[0].length;
    this.dataRows = new Array(this.rows);
    this.frequencyBlackPixelForColumns = new Array(this.columns).fill(0);

    initializeDataRowsArray(picture);
    initializeFrequencyArray(picture);
    return countLonelyBlackPixels(picture, target);
};

/**
 * @param {number} bitStampBlackPixelForRows
 * @param {number} frequencyBlackPixelForRows
 */
function DataRows(bitStampBlackPixelForRows, frequencyBlackPixelForRows) {
    this.bitStampBlackPixelForRows = bitStampBlackPixelForRows;
    this.frequencyBlackPixelForRows = frequencyBlackPixelForRows;
}

/**
 * @param {character[][]} picture
 * @param {number} target
 * @return {number}
 */
function countLonelyBlackPixels(picture, target) {
    let numberOfLonelyBlackPixels = 0;
    for (let c = 0; c < this.columns; ++c) {
        if (this.frequencyBlackPixelForColumns[c] !== target) {
            continue;
        }
        for (let r = 0; r < this.rows; ++r) {
            if (picture[r][c] === this.BLACK_PIXEL && this.dataRows[r].frequencyBlackPixelForRows === target) {
                numberOfLonelyBlackPixels += rowsAreEqual(r, this.dataRows[r].bitStampBlackPixelForRows) ? target : 0;
                break;
            }
        }
    }
    return numberOfLonelyBlackPixels;
}

/**
 * @param {number} row
 * @param {number} bitStampRow
 * @return {boolean}
 */
function rowsAreEqual(row, bitStampRow) {
    let countMatches = 0;
    for (let r = row; r < this.rows; ++r) {
        if (this.dataRows[r].bitStampBlackPixelForRows === bitStampRow) {
            ++countMatches;
        }
    }
    return countMatches === this.dataRows[row].frequencyBlackPixelForRows;
}

/**
 * @param {character[][]} picture
 * @return {void}
 */
function initializeDataRowsArray(picture) {
    for (let r = 0; r < this.rows; ++r) {
        this.dataRows[r] = new DataRows(BigInt(0), 0);
        this.dataRows[r].bitStampBlackPixelForRows = BigInt(2);

        for (let c = 0; c < this.columns; ++c) {
            if (picture[r][c] === this.BLACK_PIXEL) {
                ++this.dataRows[r].bitStampBlackPixelForRows;
                ++this.dataRows[r].frequencyBlackPixelForRows;
            }
            this.dataRows[r].bitStampBlackPixelForRows = this.dataRows[r].bitStampBlackPixelForRows * BigInt(2);
        }
    }
}

/**
 * @param {character[][]} picture
 * @return {void}
 */
function initializeFrequencyArray(picture) {
    for (let r = 0; r < this.rows; ++r) {
        for (let c = 0; c < this.columns; ++c) {
            if (picture[r][c] === this.BLACK_PIXEL) {
                ++this.frequencyBlackPixelForColumns[c];
            }
        }
    }
}
```
**C++**
```
#include <bitset>
#include <vector>
using namespace std;

class Solution {
    
    inline static const char WHITE_PIXEL = 'W';
    inline static const char BLACK_PIXEL = 'B';
    inline static const int MAX_ROW_SIZE = 200;
    vector<bitset<MAX_ROW_SIZE>> bitStampBlackPixelForRows;
    vector<int> frequencyBlackPixelForColumns;
    size_t rows;
    size_t columns;

public:
    int findBlackPixel(vector<vector<char>>& picture, int target) {
        rows = picture.size();
        columns = picture[0].size();
        initializeBitsetArray(picture);
        initializeFrequencyArray(picture);
        return countLonelyBlackPixels(picture, target);
    }

private:
    int countLonelyBlackPixels(const vector<vector<char>>& picture, int target) const {
        int numberOfLonelyBlackPixels = 0;
        for (int c = 0; c < columns; ++c) {
            if (frequencyBlackPixelForColumns[c] != target) {
                continue;
            }
            for (int r = 0; r < rows; ++r) {
                if (picture[r][c] == BLACK_PIXEL && bitStampBlackPixelForRows[r].count() == target) {
                    numberOfLonelyBlackPixels += rowsAreEqual(r, bitStampBlackPixelForRows[r]) ? target : 0;
                    break;
                }
            }
        }
        return numberOfLonelyBlackPixels;
    }

    bool rowsAreEqual(int row, const bitset<MAX_ROW_SIZE>& bitStampRow) const {
        int countMatches = 0;
        for (int r = row; r < rows; ++r) {
            if (bitStampBlackPixelForRows[r] == bitStampRow) {
                ++countMatches;
            }
        }
        return countMatches == bitStampRow.count();
    }

    void initializeBitsetArray(const vector<vector<char>>& picture) {
        bitStampBlackPixelForRows.resize(rows);
        for (int r = 0; r < rows; ++r) {
            for (int c = 0; c < columns; ++c) {
                if (picture[r][c] == BLACK_PIXEL) {
                    bitStampBlackPixelForRows[r].set(c);
                }
            }
        }
    }

    void initializeFrequencyArray(const vector<vector<char>>& picture) {
        frequencyBlackPixelForColumns.resize(columns);
        for (int r = 0; r < rows; ++r) {
            for (int c = 0; c < columns; ++c) {
                if (picture[r][c] == BLACK_PIXEL) {
                    ++frequencyBlackPixelForColumns[c];
                }
            }
        }
    }
};
```