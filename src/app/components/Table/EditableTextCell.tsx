import { ISection } from '@/services/client-api/BuildService';
import { Input } from 'antd';
import { useState } from 'react';

interface EditableCellProps {
	value: string | number;
	record: ISection;
	dataIndex: keyof ISection;
	onSave: (
		value: string | number,
		key: React.Key,
		dataIndex: keyof ISection
	) => void;
}

const EditableTextCell: React.FC<EditableCellProps> = ({
	value: initialValue,
	record,
	dataIndex,
	onSave,
}) => {
	const [editing, setEditing] = useState(false);
	const [value, setValue] = useState<string | number>(initialValue);

	const toggleEdit = () => {
		setEditing(!editing);
		if (editing) {
			onSave(value, record.id, dataIndex);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<div onDoubleClick={toggleEdit}>
			{editing ? (
				<Input
					value={value.toString()}
					onChange={handleChange}
					onBlur={toggleEdit}
					autoFocus
				/>
			) : (
				<div>{value}</div>
			)}
		</div>
	);
};

export default EditableTextCell;
