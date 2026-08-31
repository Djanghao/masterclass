# Straight forward solution

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-snake-game/solutions/3670994/](https://leetcode.com/problems/design-snake-game/solutions/3670994/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Overall, the code provides a basic structure for a snake game where the player can move the snake in different directions, eat food to increase the score, and collide with walls or itself to end the game.

1. Keep snake and food as a Queue. 
2. Use field map as array

# Code
```
class SnakeGame {
    /**
     * @param Integer $width
     * @param Integer $height
     * @param Integer[][] $food
     */

    protected $width;
    protected $height;
    protected $map;
    protected $headR = 0;
    protected $headC = 0;
    protected $score = 0; 
    protected $food;
    protected $snake;

    function __construct($width, $height, $food) {
        $nf = array_shift($food);
        $this->map[$nf[0]][$nf[1]] = 2;
        $this->food = $food;
        $this->width = $width;
        $this->height = $height;
        $this->map[0][0] = 1;
        $this->snake[] = [0,0];
    }
  
    /**
     * @param String $direction
     * @return Integer
     */
    function move($direction) {
        // R, L, D, U 
        $newR = $this->headR;
        $newC = $this->headC;
        if ($direction == 'R'){
            $newC++;
        }elseif($direction == 'L'){
            $newC--;
        }elseif($direction == 'U'){
            $newR--;
        }else{
            $newR++;
        }

        $this->headR = $newR;
        $this->headC = $newC;
        $this->snake[] = [$newR,$newC];

        // food
        if($this->map[$newR][$newC] == 2 ){
            $this->score++;
 
            $this->map[$newR][$newC] = 1;
            if(count($this->food)){
                $nf = array_shift($this->food);
                $this->map[$nf[0]][$nf[1]] = 2;
            }
            return $this->score;
        }       

        // move tail
        $tail = array_shift($this->snake);
        $this->map[$tail[0]][$tail[1]] = 0;

        if($newC < 0 || $newC >= $this->width || $newR < 0 || $newR >= $this->height || $this->map[$newR][$newC] == 1){
            // snake collides wall or itself
            return -1;
        }
        
        $this->map[$newR][$newC] = 1;
        return $this->score;
    }
}

/**
 * Your SnakeGame object will be instantiated and called as such:
 * $obj = SnakeGame($width, $height, $food);
 * $ret_1 = $obj->move($direction);
 */
```