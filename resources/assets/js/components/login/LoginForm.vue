<template>
    <form class="form-horizontal" @submit.prevent="login">
        <div class="form-group" :class="{'has-error' : errors.has('email')}">
            <label for="email" class="col-md-4 control-label">邮箱地址</label>
            <div class="col-md-6">
                <input v-model="email"
                    v-validate data-vv-rules="required|email" data-vv-as="邮箱地址"
                    id="email" type="email" class="form-control" name="email" required>
                <span class="help-block" v-show="errors.has('email')"> {{ errors.first('email')}}</span>                        
            </div>
        </div>

        <div class="form-group" :class="{'has-error' : errors.has('password')}">
            <label for="password" class="col-md-4 control-label">密码</label>

            <div class="col-md-6">
                <input v-model="password"  
                    v-validate data-vv-rules="required|min:6" data-vv-as="密码"                                    
                    id="password" type="password" class="form-control" name="password" required>
            
                <span class="help-block" v-show="errors.has('password')"> {{ errors.first('password')}}</span>                    
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-6 col-md-offset-4">
                <button type="submit" class="btn btn-primary">
                    登录
                </button>
            </div>
        </div>
    </form>

</template>

<script>
    // import JWTToken from './../../helpers/jwt';
    export default {
        data() {
            return {
                email: '',
                password: '',
            }
        },
      
        methods: {

            // login() {
            //     let formData = {
            //         client_id: '2',
            //         client_secret: 'SIIZDXbL843mCClHO7mVhg7vNhUJiglp1fwtcp92',
            //         grant_type: 'password',
            //         scope: '',
            //         username: this.email,
            //         password: this.password,
            //     }
               
            //     axios.post('/oauth/token', formData).then(res => {
            //         JWTToken.setToken(res.data.access_token);
            //         console.log(res.data);
            //     });
            // },
        }
    }
</script>                        