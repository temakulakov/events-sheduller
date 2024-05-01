import { Table } from 'antd';
import { useState } from 'react';
import EditableTextCell from '../Table/EditableTextCell';

const EditableTable: React.FC = () => {
	const [dataSource, setDataSource] = useState<DataType[]>([
		{ key: '1', name: 'John', age: 32, address: '10 Downing Street' },
		{ key: '2', name: 'Jane', age: 42, address: '20 Downing Street' },
	]);

	const handleSave = (
		val: string | number,
		key: React.Key,
		column: keyof DataType
	) => {
		const newData = [...dataSource];
		const index = newData.findIndex(item => item.key === key);
		newData[index][column] = val;
		setDataSource(newData);
	};

	const columns: ColumnsType<DataType> = [
		{
			title: 'Name',
			dataIndex: 'name',
			render: (text, record) => (
				<EditableTextCell
					value={text}
					record={record}
					dataIndex='name'
					onSave={handleSave}
				/>
			),
		},
		{
			title: 'Age',
			dataIndex: 'age',
			render: (text, record) => (
				<EditableCell
					value={text}
					record={record}
					dataIndex='age'
					onSave={handleSave}
				/>
			),
		},
		{
			title: 'Address',
			dataIndex: 'address',
			render: (text, record) => (
				<EditableTextCall
					value={text}
					record={record}
					dataIndex='address'
					onSave={handleSave}
				/>
			),
		},
	];

	return <Table dataSource={dataSource} columns={columns} />;
};

export default EditableTable;
