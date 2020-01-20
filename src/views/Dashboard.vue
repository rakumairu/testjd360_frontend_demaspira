<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>Pesanan Masuk</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-4">
        <CardCounter type="Whatsapp" :amount="$store.getters.whatsapp" />
      </div>
      <div class="col-12 col-sm-4 bottom">
        <CardCounter type="Calls" :amount="$store.getters.calls" />
      </div>
      <div class="col-12 col-sm-4 bottom">
        <CardCounter type="Emails" :amount="$store.getters.emails" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 table-responsive">
        <table class="table">
          <thead>
            <th>Nama</th>
            <th>Email</th>
            <th>No HP</th>
            <th>Jumlah Roti</th>
            <th>Keterangan</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in $store.state.pesanan" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.phoneNumber }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.remark }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  components: {
    CardCounter: () => import('@/components/CardCounter')
  }
}
</script>

<style>
h3 {
  font-weight: 600;
  margin-bottom: 2rem;
}

.name {
  text-align: left;
}

.table {
  margin-top: 24px;
}

thead {
  background-color: #20232a;
  color: white;
}

@media only screen and (max-width:480px) {
  .bottom {
    margin-top: 12px;
  }
}
</style>
