<template>
  <div class="dropdown is-right"
      :class="{'is-hoverable': isHoverable, 'is-active': isActive}" @click="openDropdown">
    <div class="dropdown-trigger">
      <button class="button is-small" aria-haspopup="true"
              aria-controls="dropdown-menu">
        <span class="icon is-small">
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a class="dropdown-item">Edit</a>
        <a class="dropdown-item">Duplicate</a>
        <a class="dropdown-item">Remove</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-header-dropdown',
  props: {
    isHoverable: Boolean,
    default: false
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    openDropdown() {
      if(!this.isHoverable){
        this.isActive = !this.isActive;
      }
    }
  }
}
</script>

<style>

</style>
