# JSGame


A simple javascript rocketship game implementation for practicing vector maths & projections.

A particle is a game object which has both a length and a direction aswell as a position.
The vector.js file contains a TwoDVector object which can be used for vector calculations, addition, subtraction, multiplication, division, length, normalization, dot product ect.

Currently the rocket has a thrust acceleration vector being applied to its velocity per-second^2 as long as the user is holding down the "up" key. This thrust vector is made by taking the current rotation of the ship and an arbitrary length allowing the vector object to produce the x & y coordinates dynamically. There is no friction or force vector which acts in the oppsoite direction when the user holds the "down" key, instead they must stop by using reverse thrusting.

Astroids are made from the particle class and set with a current heading of 180degrees, or horizontally left across the screen. These astroids bounce off the sides of the walls using vector projection. 

The dot product of two vectors is given as: 

![Alt text](http://www.sciweavers.org/tex2img.php?eq=A%20.%20B%20%3D%20%20%7C%20A%20%7C%20%20%7C%20B%20%7C%20cos%20%5Ctheta%20&bc=Transparent&fc=Black&im=png&fs=12&ff=arev&edit=0)

Thus the scalar projection of of A onto b is given by:

 
We can then find the forumla for vector reflection which works on all surfaces, even if they are not 90degrees:
