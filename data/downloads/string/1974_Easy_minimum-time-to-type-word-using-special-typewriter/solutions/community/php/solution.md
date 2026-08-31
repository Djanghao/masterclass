# PHP

**Author:** stuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/2831005/](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/2831005/)

---


![Screen Shot 2022-11-19 at 1.51.14 PM.png](./images/0.png)


# Code
```
class Solution
{

  private array $alpha = [];

  public function __construct()
  {
    $alpha = range('a', 'z');
    array_unshift($alpha, null);
    unset($alpha[0]);
    $this->alpha = array_flip($alpha);
  }

  /**
   * @param String $word
   * @return Integer
   */
  function minTimeToType($word)
  {
    $word_parts = str_split($word);

    $current_loc = 1;
    $total_time = 0;
    foreach ($word_parts as $k => $letter) {

      $target_letter_location = $this->alpha[$letter];

      // increment for next letter
      $next_letter_increment = $this->getNextLetterIncrement($target_letter_location, $current_loc);

      $current_loc = $target_letter_location;
      $total_time += ($next_letter_increment + 1);
    }
    return $total_time;
  }

  private function getNextLetterIncrement(int $target_letter_location, int $current_loc)
  {

    $clockwise_distance = $this->getClockwiseDistanceToTargetLetter($target_letter_location, $current_loc);
    $counter_distance = $this->getCounterClockwiseDistanceToTargetLetter($target_letter_location, $current_loc);

    if ($clockwise_distance === 0) {
      return 0;
    }


    if ($clockwise_distance >= $counter_distance) {
      return $counter_distance;
    }

    return $clockwise_distance;
  }

  public function getClockwiseDistanceToTargetLetter(int $target_letter_location, int $current_loc)
  {
    return abs($current_loc - $target_letter_location);
  }

  public function getCounterClockwiseDistanceToTargetLetter(int $target_letter_location, int $current_loc)
  {

    if ($target_letter_location > $current_loc) {
      return 26 - $target_letter_location + $current_loc;
    }
    return 26 - $current_loc + $target_letter_location;
  }
}
```