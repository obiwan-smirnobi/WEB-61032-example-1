import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Container, Grid } from '@mui/material';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

interface FormValues {
  propA?: string,
  propB?: string,
  propC?: string,
  propD?: string,
  propE?: Date,
  propF?: Date,
  propG?: string,
}


const MyComponent = (props) => {

  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      propE: new Date(new Date().setDate(new Date().getDate() - 7)),
      propF: new Date()
  }}

  );
  const onSubmit = data => console.log(data);

  const myProp = 42;

  return <Container maxWidth="md">
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField label="A" fullWidth {...register('propA')} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="A" fullWidth {...register('propB')} />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="c-label">C</InputLabel>
            <Select labelId="c-label" {...register('propC')}>
              <MenuItem value="">
                <em>Any</em>
              </MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name='propE'
            rules={{ required: true }}
            render={({ field, }) => {
              return (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    myProp={myProp}
                    closeOnSelect
                    format='DD/MM/YYYY'
                    label='Started after'
                    inputRef={field.ref}
                    value={field.value}
                    defaultValue={field.value}
                    onChange={(date) => {
                      field.onChange(date);
                    }}
                    slotProps={{
                      textField: {
                        variant: 'outlined'
                      }
                    }}
                  />
                </LocalizationProvider>);
            }}
          />


        </Grid>

        <Grid item xs={12}>
          <TextField label="D" fullWidth {...register('propD')} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">Save</Button>
        </Grid>
      </Grid>
    </form>
  </Container>
}

export default MyComponent;
