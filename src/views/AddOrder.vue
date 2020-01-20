<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Order</h3>
      </div>
      <div class="card-body">
        <div class="form-group">
          <label>Sumber Pesanan</label>
          <select :class="['form-control', error.source ? 'is-invalid' : '']" autofocus v-model="source">
            <option value="" selected disabled hidden>-- Pilih Sumber Pesanan --</option>
            <option value="Whatsapp">Whatsapp</option>
            <option value="Call">Call</option>
            <option value="Email">Email</option>
          </select>
          <div class="invalid-feedback" v-if="error.source">
            {{ error.source }}
          </div>
        </div>
        <div class="form-group">
          <label>Name</label>
          <div class="row">
            <div class="col-12 col-sm-6">
              <input type="text" :class="['form-control', error.firstName ? 'is-invalid' : '']" placeholder="First name" v-model="firstName">
              <div class="invalid-feedback" v-if="error.firstName">
                {{ error.firstName }}
              </div>
            </div>
            <div class="col-12 col-sm-6 last-name">
              <input type="text" :class="['form-control', error.lastName ? 'is-invalid' : '']" placeholder="Last name" v-model="lastName">
              <div class="invalid-feedback" v-if="error.lastName">
                {{ error.lastName }}
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="text" :class="['form-control', error.email ? 'is-invalid' : '']" placeholder="example@example.com" v-model="email">
          <div class="invalid-feedback" v-if="error.email">
            {{ error.email }}
          </div>
        </div>
        <div class="form-group">
          <label>Phone Number</label>
          <div class="row">
            <div class="col-3">
              <input type="number" :class="['form-control', error.areaCode ? 'is-invalid' : '']" placeholder="Area Code" v-model="areaCode">
              <div class="invalid-feedback" v-if="error.areeaCode">
                {{ error.areeaCode }}
              </div>
            </div>
            <span>-</span>
            <div class="col">
              <input type="number" :class="['form-control', error.phoneNumber ? 'is-invalid' : '']" placeholder="Phone Number" v-model="phoneNumber">
              <div class="invalid-feedback" v-if="error.phoneNumber">
                {{ error.phoneNumber }}
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>Jumlah Roti</label>
          <input type="number" :class="['form-control', error.amount ? 'is-invalid' : '']" placeholder="ex: 23" v-model.number="amount">
          <div class="invalid-feedback" v-if="error.amount">
            {{ error.amount }}
          </div>
        </div>
        <div class="from-group">
          <label>Catatan</label>
          <textarea cols="30" rows="5" :class="['form-control', error.remark ? 'is-invalid' : '']" v-model="remark"></textarea>
          <div class="invalid-feedback" v-if="error.remark">
            {{ error.remark }}
          </div>
        </div>
        <div class="button">
          <button @click="add" class="btn btn-primary" :disabled='!required()'>Tambahkan</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-order',
  data() {
    return {
      source: '',
      firstName: '',
      lastName: '',
      email: '',
      areaCode: '',
      phoneNumber: '',
      amount: '',
      remark: '',
      error: {}
    }
  },
  methods: {
    add() {
      if (this.required()) {
        const payload = {
          source: this.source,
          name: this.firstName + ' ' + this.lastName,
          email: this.email,
          phoneNumber: this.areaCode + this.phoneNumber,
          amount: this.amount,
          remark: this.remark
        }
        this.$store.commit('addOrder', payload)
        this.clear()
      }
    },
    required() {
      return (
        this.source !== '' &&
        this.firstName !== '' &&
        this.areaCode !== '' &&
        this.phoneNumber !== '' &&
        this.amount !== '' &&
        this.amount !== 0 &&
        this.source !== null &&
        this.firstName !== null &&
        this.areaCode !== null &&
        this.phoneNumber !== null &&
        this.amount !== null
      )
    },
    clear() {
      this.source = null
      this.firstName = null
      this.lastName = null
      this.email = null
      this.areaCode = null
      this.phoneNumber = null
      this.amount = null
      this.remark = null
      this.error = {}
    }
  },
  watch: {
    source: function() {
      if (this.source === '') {
        this.error.source = 'Field tidak boleh kosong'
      } else {
        this.error.source = false
      }
    },
    firstName: function() {
      if (this.firstName === '') {
        this.error.firstName = 'Field tidak boleh kosong'
      } else {
        this.error.firstName = false
      }
    },
    lastName: function() {
      if (this.lastName === '') {
        this.error.lastName = 'Field tidak boleh kosong'
      } else {
        this.error.lastName = false
      }
    },
    areaCode: function() {
      if (this.areaCode === '') {
        this.error.areaCode = 'Field tidak boleh kosong'
      } else {
        this.error.areaCode = false
      }
    },
    phoneNumber: function() {
      if (this.phoneNumber === '') {
        this.error.phoneNumber = 'Field tidak boleh kosong'
      } else {
        this.error.phoneNumber = false
      }
    },
    amount: function() {
      if (this.amount === '') {
        this.error.amount = 'Field tidak boleh kosong'
      } else if (this.amount === 0) {
        this.error.amount = 'Harus lebih dari 0'
      } else {
        this.error.amount = false
      }
    }
  }
}
</script>

<style>
.card-header {
  background-color: white;
}

.card-header > h3 {
  font-weight: 550;
}

label {
  text-align: left;
  width: 100%;
}

.button {
  display: flex;
  justify-content: flex-end;
}

.btn {
  margin-top: 24px;
}

.invalid-feedback {
  display: block;
  text-align: left;
}

.btn-primary {
  background-color: #61dafb;
  border-color: #10a8c8;
  color: black;
}

.btn-primary:disabled {
  background-color: #9affff;
  border-color: #61dafb;
  color: black;
}

@media only screen and (max-width:480px) {
  .last-name {
    margin-top: 12px;
  }

  .btn {
    width: 100%;
  }
}
</style>
