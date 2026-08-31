# The Best Solution with Best Explanation

**Author:** Jagadish_Shankar
**Votes:** 3
**Link:** [https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/4919465/](https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/4919465/)

---

# Intuition

- My code aims to solve verbal arithmetic puzzles by mapping letters to digits, ensuring the equation is valid. 
- It uses backtracking to explore possible digit assignments for letters and checks if the equation is valid or not.

# Approach

- **Understanding the Problem** :

    - The problem is to check if a given equation formed by words and a result string can be solved by assigning digits to each unique character in such a way that the equation holds true.
    - Each character in the equation represents a digit from 0 to 9, and the equation must follow standard arithmetic rules.

- **Approach Overview** :

    - The approach is to use backtracking to try out different digit assignments for each unique character in the equation.
    - At each step, we try assigning a digit to a character and check if the current assignment leads to a valid solution.
    - If a solution is not found, we backtrack and try a different digit until all possibilities are exhausted.

- **Logic** :

    - **Set Up Data Structures** :

        - Initialize sets to store the first letters of all words and all unique characters in the equation.
    
    - **Define the Backtracking Function**  :

        - The backtracking function explores all possible digit assignments for each unique character.
        - It takes into account constraints such as avoiding leading zeroes and ensuring consistent digit assignments.
    
    - **Check Equation Validity** :

        - At each recursive call, check if the current digit assignments satisfy the equation.

    - **Explore Digit Assignments** :
        
        - Use a depth-first search approach to explore different digit assignments recursively.
        - If a valid solution is found, return true; otherwise, continue exploring.

    - **Return Final Result** :
        - If the entire search space is explored and no valid solution is found, return false.

- **Variables Used** :

    - ```words_string_array``` : Array of words in the equation.
    result_word_string: Result string of the equation.
    - ```first_letter_of_all_words_set``` : Set to store the first letters of all words.
    - ```unique_characters_set``` : Set to store all unique characters in the equation.
    - ```first_letter_of_all_words_string``` : String representation of the first letters of all words.
    - ```unique_characters_string``` : String representation of all unique characters in the equation.
    - ```depth_first_search()``` : Recursive function to explore digit assignments.
    - ```visited_digits_array``` : Array to keep track of visited digits during backtracking.
    - ```map``` : Map to store digit assignments for characters during backtracking.

- ```depth_first_search()``` Function : 

    - **Parameters** :
        
        - ```current_index``` : The index of the current character being considered from the unique_characters_string.
        - ```N``` : The total number of unique characters in the equation.
        - ```unique_characters_string```: A string containing all unique characters in the equation.
        - ```first_letter_of_all_words_string``` : A string containing the first letters of all words.
        - ```words_string_array``` : An array of words in the equation.
        - ```result_word_string``` : The result string of the equation.
        - ```visited_digits_array``` : An array to keep track of visited digits during backtracking.
        - ```map``` : A map to store digit assignments for characters during backtracking.
    
    - **Key Logic** :
    
        - The ```depth_first_search()``` function is a recursive function that explores all possible digit assignments for each unique character in the equation.
        - It performs a depth-first search (DFS) traversal of the search space, trying out different digit assignments at each step.
    
    - **Base Case** :

        - If current_index is equal to ```N```, it means all characters in ```unique_characters_string``` have been assigned digits. In this case, it checks if the current digit assignments satisfy the equation using the ```check_equation()``` function. If ```true``` , it returns true; otherwise, it continues exploring.

    - **Backtracking and Digit Assignment** :

        - **For each digit from 0 to 9** :

            - Checks if the digit has been visited before. If it has, it skips to the next digit.
            - Checks if the current character corresponds to the first letter of a word and if the digit is 0. If both conditions are true, it skips to the next digit to avoid leading zeroes.
            - Assigns the current digit to the current character in the map array and marks the digit as visited in the visited_digits_array.
            - Recursively calls the depth_first_search function with the next index (current_index + 1).
            - If the recursive call returns true, indicating a valid solution, it returns true.
            - Otherwise, it backtracks by resetting the digit assignment in the map array and marking the digit as unvisited in the visited_digits_array.
            - Returns ```true``` if a valid solution is found during the depth-first search, indicating that the current digit assignments satisfy the equation. Otherwise, returns ```false```.

# Complexity

- N - maximum number of unique characters among all input words.

- Time complexity : $$O(10 ^ N)$$

- Space complexity : $$O(N)$$

# Code

```
class Solution {

    public boolean check_equation(String[] words_string_array , String result_word_string , int[] map){

        int words_number_sum = 0;

        for(String word_string : words_string_array){

            int current_word_number = 0;

            for(int i = 0 , N = word_string.length() ; (i < N) ; i++){

                char alphabet = word_string.charAt(i);

                current_word_number = ((current_word_number * 10) + map[((int) alphabet)]);
            }

            words_number_sum += current_word_number;
        }

        int result_word_number = 0;

        for(int i = 0 , N = result_word_string.length() ; (i < N) ; i++){

            char alphabet = result_word_string.charAt(i);

            result_word_number = ((result_word_number * 10) + map[((int) alphabet)]);
        }

        return (words_number_sum == result_word_number);
    }

    public boolean depth_first_search(int current_index , int N , String unique_characters_string , String first_letter_of_all_words_string , String[] words_string_array , String result_word_string , boolean[] visited_digits_array , int[] map){

        if(current_index >= N){
            return check_equation(words_string_array , result_word_string , map);
        }

        for(int digit = 0 ; (digit <= 9) ; digit++){

            // To Avoid using the same digit used in the previous recursive call.

            if(visited_digits_array[digit]){
                continue;
            }

            char alphabet = unique_characters_string.charAt(current_index);

            // To Avoid preceeding zeros in the number.

            if((digit == 0) && (first_letter_of_all_words_string.contains((alphabet + "")))){
                continue;
            }

            // BackTracking Logic.

            map[alphabet] = digit;

            visited_digits_array[digit] = true;

            if(depth_first_search((current_index + 1) , N , unique_characters_string , first_letter_of_all_words_string , words_string_array , result_word_string , visited_digits_array , map)){
                return true;
            }

            map[alphabet] = 0;

            visited_digits_array[digit] = false;
        }

        return false;
    }

    public boolean isSolvable(String[] words_string_array , String result_word_string){

        Set<Character> first_letter_of_all_words_set = new HashSet<>();

        Set<Character> unique_characters_set = new HashSet<>();

        for(String word_string : words_string_array){

            for(int i = 0 , N = word_string.length() ; (i < N) ; i++){

                char alphabet = word_string.charAt(i);

                if((i == 0) && (N > 1)){
                    first_letter_of_all_words_set.add(alphabet);
                }

                unique_characters_set.add(alphabet);
            }
        }

        for(int i = 0 , N = result_word_string.length() ; (i < N) ; i++){

            char alphabet = result_word_string.charAt(i);

            if((i == 0) && (N > 1)){
                first_letter_of_all_words_set.add(alphabet);
            }

            unique_characters_set.add(alphabet);
        }

        String first_letter_of_all_words_string = first_letter_of_all_words_set.toString().replaceAll("[,\\\\[\\\\]\\\\s]" , "");

        String unique_characters_string = unique_characters_set.toString().replaceAll("[,\\\\[\\\\]\\\\s]" , "");

        return depth_first_search(0 , unique_characters_string.length() , unique_characters_string , first_letter_of_all_words_string , words_string_array , result_word_string , (new boolean[10]) , (new int[128]));
    }
}
```