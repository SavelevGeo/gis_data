<script setup lang="ts"></script>

<template>
  <ol-map style="min-width: 100vw; height: 100vh">
    <ol-view :center="[40, 40]" :zoom="5" />
    <ol-tile-layer :opacity="0.5">
      <ol-source-osm />
    </ol-tile-layer>
  </ol-map>
</template>
