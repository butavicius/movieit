import React from "react";
import { useFormikContext } from "formik";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

function FormPicker({ icon, items, name, numColumns, placeholder, PickerItemComponent, width }) {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  return (
    <>
      <Picker
        items={items}
        placeholder={placeholder}
        icon={icon}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]?.name}
        width={width}
        numColumns={numColumns}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormPicker;
