# Java, Kotlin, C++ || Faster than 100% || Bitwise || Brute force shift and test || Explanation

**Author:** dudeandcat
**Votes:** 3
**Link:** [https://leetcode.com/problems/image-overlap/solutions/833260/](https://leetcode.com/problems/image-overlap/solutions/833260/)

---

If useful, please up-vote.

Faster than 100% in all three languages.  Best runtime of 4ms in Java and C++, and 177ms in Kotlin as of October 2022.

Convert ```A[][]``` and ```B[][]``` to one dimensional arrays containing a bit mask for each row of A and B.  Because A and B are limited to 30 x 30 arrays, one row of A or B will fit into 32-bit ```int``` values.  By using bits in ```int``` values, an entire row can be checked for overlapping '1's by using a bitwise AND operator (&), followed by counting the resulting overlapping '1' bits from the AND operator, with a built-in bit counting function.  With this fast method of checking for overlapping '1' bits, we do a brute force comparison of all possible shift positions, to get the maximal overlap of '1's.  

I tried other methods, such as maximizing shift vector counts between '1' bits, and comparing arrays without reducing to bit masks, but the other methods I tried were all slower.  The bit masks with comparing all possible positions was the fastest.

## ---------- JAVA ----------
```
class Solution {
    public int largestOverlap(int[][] A, int[][] B) {
        int len = A.length;

        // Reduce A[][] and B[][] to one dimentional arrays of int[], where
        // each '1' on a row in the original matrix, is represented as a 
        // single bit in the one dimensional array.  This is so we can later 
        // do bit operations to check for '1's overlapping.  We can do this 
        // since the max size of A[][] and B[][] is 30 x 30, which fits rows 
        // into 32-bit int's.  By storing the rows of A[][] and B[][] in bits 
        // within integers, a bitwise AND can be use to find the overlap of an 
        // entire row in one simple operation.
        int[] Abits = new int[len];
        int[] BbitsLeft = new int[len];
        for (int r = 0; r < len; r++) {
            for (int c = 0; c < len; c++) {
                Abits[r] = (Abits[r] << 1) + A[r][c];
                BbitsLeft[r] = (BbitsLeft[r] << 1) + B[r][c];
            }
        }
        int[] BbitsRight = Arrays.copyOf(BbitsLeft, len);

        // Shift B[] to all posible positions vertically by row, and horrizontally 
        // by column.  At each possible shift position, check B overlap with A, 
        // counting the 1 bits which are at the same row,column location in both 
        // A and B.  Keep track of the maximum amout of overlapping 1 bits, and 
        // return this maximal value.
        //
        // The outermost loop is to shift the columns of BbitsLeft[] left, 
        // and the columns of BbitsRight[] right at the same time.  This is done in 
        // two copies of the B bit array, BbitsLeft[] and BbitsRight[], because the 
        // shifting left or right of the int's in the arrays is destructive as bits 
        // may fall off the end of the int and are lost.  On the first pass through 
        // this loop, BbitsLeft[] and BbitsRight[] are identical, so we compare the 
        // same array twice, which is inefficeint, but oh well.
        //
        // The next loop inward, shifts the rows from the most negative shift, to 
        // just before a zero shift.  Followed by a loop that shifts the rows from 
        // a zero shift to the most positive row shift.  Row shifts are 
        // non-desctuctive to the data, unlike the column shifts.  The row shifts 
        // simply select different rows to compare, but column shifts must shift data  
        // left and right so that the row values can be AND'ed together to get the 
        // overlap.  In both of these loops combined, the row shifts are from 
		// -(A.length-1) to +(A.length-1).  The first of these loops handles the 
		// negative row shifts, while the second loop handles the non-negative 
		// row shifts.
        //
        // The innermost loops are to accumulate the count of overlapping bits from 
        // each row, which selecting the proper rows in A and B, given the current
        // rowShift position.
        int maxCount = 0;
        int countLeft;
        int countRight;
        for (int colShift = 0; colShift < len; colShift++) {
            for (int rowShift = -(len - 1); rowShift < 0; rowShift++) {
                countLeft = 0;
                countRight = 0;
                for (int ARow = 0, BRow = -rowShift; BRow < len; ARow++, BRow++) {
                    countLeft += Integer.bitCount(Abits[ARow] & BbitsLeft[BRow]);
                    countRight += Integer.bitCount(Abits[ARow] & BbitsRight[BRow]);
                }
                maxCount = Math.max(maxCount, Math.max(countLeft, countRight));
            }
            for (int rowShift = 0; rowShift < len; rowShift++) {
                countLeft = 0;
                countRight = 0;
                for (int ARow = rowShift, BRow = 0; ARow < len; ARow++, BRow++) {
                    countLeft += Integer.bitCount(Abits[ARow] & BbitsLeft[BRow]);
                    countRight += Integer.bitCount(Abits[ARow] & BbitsRight[BRow]);
                }
                maxCount = Math.max(maxCount, Math.max(countLeft, countRight));
            }
            for (int r = 0; r < len; r++) {
                BbitsLeft[r] <<= 1;
                BbitsRight[r] >>= 1;
            }
        }
        return maxCount;
    }
}
```

## ---------- KOTLIN ----------
```
class Solution {
    fun largestOverlap(A: Array<IntArray>, B: Array<IntArray>): Int {
        var len = A.size

        // Reduce A[][] and B[][] to one dimentional arrays of int[], where
        // each '1' on a row in the original matrix, is represented as a 
        // single bit in the one dimensional array.  This is so we can later 
        // do bit operations to check for '1's overlapping.  We can do this 
        // since the max size of A[][] and B[][] is 30 x 30, which fits rows 
        // into 32-bit int's.  By storing the rows of A[][] and B[][] in bits 
        // within integers, a bitwise AND can be use to find the overlap of an 
        // entire row in one simple operation.
        var Abits = IntArray(len)
        var BbitsLeft = IntArray(len)
        for (r in 0..len-1) {
            for (c in 0..len-1) {
                Abits[r] = (Abits[r] shl 1) + A[r][c]
                BbitsLeft[r] = (BbitsLeft[r] shl 1) + B[r][c]
            }
        }
        var BbitsRight = BbitsLeft.copyOf()

        // Shift B[] to all posible positions vertically by row, and horrizontally 
        // by column.  At each possible shift position, check B overlap with A, 
        // counting the 1 bits which are at the same row,column location in both 
        // A and B.  Keep track of the maximum amout of overlapping 1 bits, and 
        // return this maximal value.
        //
        // The outermost loop is to shift the columns of BbitsLeft[] left, 
        // and the columns of BbitsRight[] right at the same time.  This is done in 
        // two copies of the B bit array, BbitsLeft[] and BbitsRight[], because the 
        // shifting left or right of the int's in the arrays is destructive as bits 
        // may fall off the end of the int and are lost.  On the first pass through 
        // this loop, BbitsLeft[] and BbitsRight[] are identical, so we compare the 
        // same array twice, which is inefficeint, but oh well.
        //
        // The next loop inward, shifts the rows from the most negative shift, to 
        // just before a zero shift.  Followed by a loop that shifts the rows from 
        // a zero shift to the most positive row shift.  Row shifts are 
        // non-desctuctive to the data, unlike the column shifts.  The row shifts 
        // simply select different rows to compare, but column shifts must shift data  
        // left and right so that the row values can be AND'ed together to get the 
        // overlap.  In both of these loops combined, the row shifts are from 
		// -(A.length-1) to +(A.length-1).  The first of these loops handles the 
		// negative row shifts, while the second loop handles the non-negative 
		// row shifts.
        //
        // The innermost loops are to accumulate the count of overlapping bits from 
        // each row, which selecting the proper rows in A and B, given the current
        // rowShift position.
        var maxCount = 0
        var countLeft = 0
        var countRight = 0
        for (colShift in 0..len-1) {
            for (rowShift in -(len - 1)..-1) {
                countLeft = 0
                countRight = 0
                var ARow = 0
                for (BRow in -rowShift..len-1) {
                    countLeft += Integer.bitCount(Abits[ARow] and BbitsLeft[BRow])
                    countRight += Integer.bitCount(Abits[ARow] and BbitsRight[BRow])
                    ARow++
                }
                maxCount = Math.max(maxCount, Math.max(countLeft, countRight))
            }
            for (rowShift in 0..len-1) {
                countLeft = 0
                countRight = 0
                var BRow = 0
                for (ARow in rowShift..len-1) {
                    countLeft += Integer.bitCount(Abits[ARow] and BbitsLeft[BRow])
                    countRight += Integer.bitCount(Abits[ARow] and BbitsRight[BRow])
                    BRow++
                }
                maxCount = Math.max(maxCount, Math.max(countLeft, countRight))
            }
            for (r in 0..len-1) {
                BbitsLeft[r] = BbitsLeft[r] shl 1
                BbitsRight[r] = BbitsRight[r] shr 1
            }
        }
        return maxCount
    }
}
```

## ---------- C++ ----------
```
class Solution {
public:
    int largestOverlap(vector<vector<int>>& A, vector<vector<int>>& B) {
        const int len = A.size();

        // Reduce A[][] and B[][] to one dimentional arrays of int[], where
        // each '1' on a row in the original matrix, is represented as a 
        // single bit in the one dimensional array.  This is so we can later 
        // do bit operations to check for '1's overlapping.  We can do this 
        // since the max size of A[][] and B[][] is 30 x 30, which fits rows 
        // into 32-bit int's.  By storing the rows of A[][] and B[][] in bits 
        // within integers, a bitwise AND can be use to find the overlap of an 
        // entire row in one simple operation.
        unsigned int Abits [len];
        unsigned int BbitsLeft [len];
        for (int r = 0; r < len; r++) {
            Abits[r] = 0;
            BbitsLeft[r] = 0;
            for (int c = 0; c < len; c++) {
                Abits[r] = (Abits[r] << 1) + A[r][c];
                BbitsLeft[r] = (BbitsLeft[r] << 1) + B[r][c];
            }
        }
        unsigned int BbitsRight [len];
        for (int i = 0; i < len; i++)  BbitsRight[i] = BbitsLeft[i];
        // std::copy (BbitsLeft, BbitsLeft + len, BbitsRight);

        // Shift B[] to all posible positions vertically by row, and horrizontally 
        // by column.  At each possible shift position, check B overlap with A, 
        // counting the 1 bits which are at the same row,column location in both 
        // A and B.  Keep track of the maximum amout of overlapping 1 bits, and 
        // return this maximal value.
        //
        // The outermost loop is to shift the columns of BbitsLeft[] left, 
        // and the columns of BbitsRight[] right at the same time.  This is done in 
        // two copies of the B bit array, BbitsLeft[] and BbitsRight[], because the 
        // shifting left or right of the int's in the arrays is destructive as bits 
        // may fall off the end of the int and are lost.  On the first pass through 
        // this loop, BbitsLeft[] and BbitsRight[] are identical, so we compare the 
        // same array twice, which is inefficeint, but oh well.
        //
        // The next loop inward, shifts the rows from the most negative shift, to 
        // just before a zero shift.  Followed by a loop that shifts the rows from 
        // a zero shift to the most positive row shift.  Row shifts are 
        // non-desctuctive to the data, unlike the column shifts.  The row shifts 
        // simply select different rows to compare, but column shifts must shift data  
        // left and right so that the row values can be AND'ed together to get the 
        // overlap.  In both of these loops combined, the row shifts are from 
		// -(A.length-1) to +(A.length-1).  The first of these loops handles the 
		// negative row shifts, while the second loop handles the non-negative 
		// row shifts.
        //
        // The innermost loops are to accumulate the count of overlapping bits from 
        // each row, which selecting the proper rows in A and B, given the current
        // rowShift position.
        int maxCount = 0;
        int countLeft;
        int countRight;
        for (int colShift = 0; colShift < len; colShift++) {
            for (int rowShift = -(len - 1); rowShift < 0; rowShift++) {
                countLeft = 0;
                countRight = 0;
                for (int ARow = 0, BRow = -rowShift; BRow < len; ARow++, BRow++) {
                    countLeft += __builtin_popcount(Abits[ARow] & BbitsLeft[BRow]);
                    countRight += __builtin_popcount(Abits[ARow] & BbitsRight[BRow]);
                }
                maxCount = max(maxCount, max(countLeft, countRight));
            }
            for (int rowShift = 0; rowShift < len; rowShift++) {
                countLeft = 0;
                countRight = 0;
                for (int ARow = rowShift, BRow = 0; ARow < len; ARow++, BRow++) {
                    countLeft += __builtin_popcount(Abits[ARow] & BbitsLeft[BRow]);
                    countRight += __builtin_popcount(Abits[ARow] & BbitsRight[BRow]);
                }
                maxCount = max(maxCount, max(countLeft, countRight));
            }
            for (int r = 0; r < len; r++) {
                BbitsLeft[r] <<= 1;
                BbitsRight[r] >>= 1;
            }
        }
        return maxCount;
    }
};
```