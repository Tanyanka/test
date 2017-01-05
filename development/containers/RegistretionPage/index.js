import React, {Component} from 'react';
import { Input, RadioGroup, RadioButton } from 'react-toolbox';

const datetime = new Date(2015, 10, 16);
const min_datetime = new Date(new Date(datetime).setDate(8));
const max_datetime = new Date(new Date(datetime).setDate(24));
datetime.setHours(17);
datetime.setMinutes(28);

const localeExample = {
    months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
    monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
    weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
    weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
    weekdaysLetter: 'ig_al_ar_az_og_ol_lr'.split('_')
};

export class RegistrationPage extends React.Component {
    state = { name: '', familyName: '', phone: '', password: '', email: '', value: 'men', date2: datetime };

    handleChange = (name, value) => {
        this.setState({...this.state, [name]: value});
    };

    render () {
        return (
            <section>
                <Input type='text' label='Name' hint='Vasya' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16 } />
                <Input type='text' label='Family name' hint='Pyatochkin' name='name' value={this.state.familyName} onChange={this.handleChange.bind(this, 'familyName')} maxLength={16 } />
                <RadioGroup name='Male' value={this.state.value} onChange={this.handleChange}>
                    <RadioButton label='Women' value='women'/>
                    <RadioButton label='Men' value='men'/>
                </RadioGroup>
                <DatePicker
                    label='Birthdate'
                    onChange={this.handleChange.bind(this, 'date1')}
                    value={this.state.date1}
                    sundayFirstDayOfWeek
                />
                <Input type='tel' label='Phone' name='phone' value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} />
                <Input type='password' label='Password' name='password' value={this.state.password} onChange={this.handleChange.bind(this, 'password')} />
            </section>
        )
    }
}

export default RegistrationPage;
