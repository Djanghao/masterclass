# Solved...........✅

**Author:** PritamBanik
**Votes:** 4
**Link:** [https://leetcode.com/problems/string-compression-iii/solutions/6007582/](https://leetcode.com/problems/string-compression-iii/solutions/6007582/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c []
int findLen(char *word,int length, int index,char letter){
    int count = 1;
    for(int j = index; j < length; j++){
        if (word[j] == letter){
            count++;
        } else{
            break;
        }
    }
    return count;
}

char* compressedString(char* word) {
    int length = strlen(word);

    char* result = malloc(sizeof(char) * ((length+1) * 2));
    int index = 0;
    int count = 0;
    char val = '!';

    for(int i = 0 ; i < length ;){
        val = word[i];
        count = findLen(word,length, i,val);
        i+=(count-1);
        if (count < 9){
            
            switch(count-1) {
                case 1: result[index++] = '1';result[index++] = val;break;
                case 2: result[index++] = '2';result[index++] = val;break;
                case 3: result[index++] = '3';result[index++] = val;break;
                case 4: result[index++] = '4';result[index++] = val;break;
                case 5: result[index++] = '5';result[index++] = val;break;
                case 6: result[index++] = '6';result[index++] = val;break;
                case 7: result[index++] = '7';result[index++] = val;break;
                case 8: result[index++] = '8';result[index++] = val;break;
                default: break;
            }
            
        }else {
            while (count > 9){
            result[index++] = '9';
            result[index++] = val;
            count = count - 9;
            }
            switch(count-1) {
                case 1: result[index++] = '1';result[index++] = val;break;
                case 2: result[index++] = '2';result[index++] = val;break;
                case 3: result[index++] = '3';result[index++] = val;break;
                case 4: result[index++] = '4';result[index++] = val;break;
                case 5: result[index++] = '5';result[index++] = val;break;
                case 6: result[index++] = '6';result[index++] = val;break;
                case 7: result[index++] = '7';result[index++] = val;break;
                case 8: result[index++] = '8';result[index++] = val;break;
                default: break;
            }

        } 
    }
    result[index] = '\\0';
    return result;
}
```