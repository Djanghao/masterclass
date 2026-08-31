# Desafío semanal weekly commit - diegoheg - 27/06/2024

**Author:** diegoheg
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/5405710/](https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/5405710/)

---

# Intuition
No debemos randomizar el punto en x e y ya que no ser\xEDa uniforme dado que estar\xEDamos buscando aleatorios en espacios lineales, se debe randomizar la orientaci\xF3n y la distancia para generar una distribuci\xF3n uniforme que avanza desde el centro del circulo hacia afuera seg\xFAn el radio.

# Approach
Primero, nos damos cuenta de que el radio es a lo m\xE1s $$10^8$$ y que tanto el punto del eje x como el del eje y del centro est\xE1n contenidos en $$[10^{-7}, 10^7]$$, podemos decir que la coordenada m\xE1s grande del centro ser\xE1 $$10^{15}$$, mientras la m\xE1s peque\xF1a $$10^{-15}$$. Dado esto, debemos randomizar la distancia del centro al punto para que pueda soportar esa magnitud, por eso el $$10^{15}$$ que aparece en la proporci\xF3n de la distancia. No nos debemos ocupar del signo ya que eso nos lo dar\xE1 la orientaci\xF3n.

Usando coordenadas polares podemos randomizar el \xE1ngulo y calcular las distancias x e y usando seno y coseno.

# Complexity
- Time complexity:
Utilizar rand es $$O(log(m))$$ con m $$10^{15}$$ en este caso. Las funciones trigonom\xE9tricas son $$O(1)$$ y la multiplicaci\xF3n es $$O(1)$$. Luegola complejidad es $$~O(nlog(m))$$ como m es constante $$O(n)$$

- Space complexity:
Se considera $$O(1)$$ ya que solo guardamos funciones, clases y variables de manera constante.

# Code
```
class Solution

=begin
  :type radius: Float
  :type x_center: Float
  :type y_center: Float
=end
  def initialize(radius, x_center, y_center)
    @radius = radius
    @x_center = x_center
    @y_center = y_center
  end

=begin
  :rtype: Float[]
=end
  def rand_point()
    distance_proportion = Math.sqrt(rand(10**15).to_f/10**15)
    if distance_proportion.zero?
      [0, 0]
    end
    orientation = (rand(10**15).to_f/10**15) * 2 * Math::PI
    x_random = @x_center + (@radius * Math.cos(orientation) * distance_proportion)
    y_random = @y_center + (@radius * Math.sin(orientation) * distance_proportion) 
    [x_random, y_random]
  end
end

# Your Solution object will be instantiated and called as such:
# obj = Solution.new(radius, x_center, y_center)
# param_1 = obj.rand_point()
```