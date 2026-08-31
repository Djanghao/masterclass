# [Ruby] Easy to understand solution

**Author:** gxespino
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-snake-game/solutions/1865428/](https://leetcode.com/problems/design-snake-game/solutions/1865428/)

---

This is a sliding window solution using an array as a Queue

```ruby
class SnakeGame
  GAME_OVER = -1

  def initialize(width, height, food)
    @width = width
    @height = height

    @row = 0
    @col = 0
    @score = 0

    @snake = []
    @food = food
  end

  def move(direction)
    case direction
    when "U" then @row-=1
    when "D" then @row+=1
    when "L" then @col-=1
    when "R" then @col+=1
    end

    shift_snake_unless_ate_food!

    return GAME_OVER if collision?

    @snake << [@row, @col]
    @score
  end

  private

  def collision?
    return true if @row < 0 || @row >= @height
    return true if @col < 0 || @col >= @width
    return true if @snake.include? [@row, @col]

    false
  end

  def shift_snake_unless_ate_food!
    if [@row, @col] == @food[0]
      @score += 1
      @food.shift
    else
      @snake.shift
    end
  end
end
```