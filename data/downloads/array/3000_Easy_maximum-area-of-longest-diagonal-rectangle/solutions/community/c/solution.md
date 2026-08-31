# Fastest and most efficient solution for C language

**Author:** Wolffang_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/5962117/](https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/5962117/)

---

# Intuition
The fastest and most efficient way to solve this problem in C language.

# Code
```c []
int areaOfMaxDiagonal(int** dimensions, int dimensionsSize, int* dimensionsColSize) {
    int i,area,max=0;
    float maxDiagonal=sqrt((dimensions[0][0]*dimensions[0][0])+(dimensions[0][1]*dimensions[0][1]));
    for(i=1;i<dimensionsSize;i++) {
        if(sqrt((dimensions[i][0]*dimensions[i][0])+(dimensions[i][1]*dimensions[i][1]))>maxDiagonal) {
            maxDiagonal=sqrt((dimensions[i][0]*dimensions[i][0])+(dimensions[i][1]*dimensions[i][1]));
            max=i;
        }
        else if(sqrt((dimensions[i][0]*dimensions[i][0])+(dimensions[i][1]*dimensions[i][1]))==maxDiagonal) {
            if((dimensions[i][0]*dimensions[i][1])>(dimensions[max][0]*dimensions[max][1])) {
                maxDiagonal=sqrt((dimensions[i][0]*dimensions[i][0])+(dimensions[i][1]*dimensions[i][1]));
                max=i;
            }
        }
    }
    area=dimensions[max][0]*dimensions[max][1];
    return area;
}
```