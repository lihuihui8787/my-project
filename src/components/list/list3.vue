<template>
  <div>
    <div class="event" data-date="28 June 2016">
      <h3>Lorem ipsum dolor sit amet</h3>
      <p class="event-content" data-date="28 June 2016">
        consectetur adipiscing elit. Aenean vulputate ornare lacinia. Cras ut augue nulla. Nullam quis molestie leo. Integer et vehicula lectus. Quisque cursus lorem sed interdum ultricies.
      </p>

      <ul id="lightgallery" class="list-inline" data-mode="lg-slide-skew-rev" loop="1">
        <li v-for="v in item" :data-src="v.src">
          <a href><img :src="v.src" alt="" style="width: 100px;"></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name:'app_list3',
    data(){
      return {
        item:[
          {src:'static/img/img-wall-01.jpg'},
          {src:'static/img/img-wall-02.jpg'},
          {src:'static/img/img-wall-03.jpg'}

        ]
      }
    },
    mounted(){
      console.log(11111);
      lightGallery(document.getElementById('lightgallery'),{
        mode:'lg-lollipop',
        cssEasing:'cubic-bezier(0.25, 0, 0.25, 1)',
        mousewheel:true,
        zoom:false
      });


    }
  }
</script>
