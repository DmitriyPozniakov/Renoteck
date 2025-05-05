<template>
  <nav>
    <img src="@/assets/images/logo.svg" class="logo" alt="logo" />
    <ul>
      <li><a href="">About</a></li>
      <li><a href="">Services</a></li>
      <li><a href="">Type of roofing</a></li>
      <li><a href="">Locations</a></li>
      <li><a href="">Projects</a></li>
      <li><a href="">3D Vizualization</a></li>
      <li><a href="">Financing</a></li>
      <li><a href="">Referral program</a></li>
      <li><a href="">Blog</a></li>
      <li><a href="">Contacts</a></li>
    </ul>
    <div class="nav-actions">
        <base-social platform="instagram"></base-social>
        <base-social platform="facebook"></base-social>
        <base-button><img src="@/assets/images/Phone.svg" alt="phone"> 877-235-9224</base-button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #292929;
  border-radius: 12px;
  padding: 16px;


  ul {
    display: flex;
    gap: 24px;

    li a {
      color: #f9f9f9;
      font-family: 'Inter-Medium';
      font-size: 1.6rem;
    }
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}
</style>