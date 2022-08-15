<script setup>
</script>

<template>
  <div class="about">

    <h1  margin-top= "3rem;"  > Welcome to NERF! 
      You can convert video to 3D image by clicking upload video. </h1>   

      <div style="display:inline-block;vertical-align:top;">
     
<iframe  width="560" height="345" src="https://www.youtube.com/watch?v=JuH79E8rdKc&t=1s">
</iframe>

 </div>
 <div style="display:inline-block;"  >
<h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <iframe width="560" height="345"  src="https://youtu.be/ujOMgaKV3lA">
</iframe>
 
</h1>
 
 
 </div>
<h1>
   Abstract & Method:
</h1>
<h2>
   &nbsp;&nbsp;&nbsp;&nbsp; We present a model that reconstruct the radiance field and is able to generate novel views of a complex
   3D scenes based on a set of 2D images. We will use COLMAP to reconstruct the object. The COLMAP consists of intrinsic matrix of all 
   reconstructed cameras, pose and key points of all reconstructed images. The reconstructed pose of an image is specified as the projection 
   from world to the camera coordinate system. The data conversion consists of a quaternion (QW, QX, QY, QZ) and a translation vector (TX, TY, TZ). 
   Our model will scale output to Normalized device coordinate (NDC Space).

</h2>

<img src="../assets/model.png" width="560" height="345" >
<img src="../assets/formula.png" width="650" height="345" >
 

<h1>
   Expected outcomes:
</h1>


<video width="560" height="345" controls>
  <source src="../assets/lego_demo.mp4" type="video/mp4">
</video>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<video width="560" height="345" controls>
  <source src="../assets/flower_demo.mp4" type="video/mp4">
</video>

  </div>
</template>












