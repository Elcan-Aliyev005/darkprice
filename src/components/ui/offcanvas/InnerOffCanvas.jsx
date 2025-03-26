
import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
import PoppoverInfo from './PoppoverInfo';
import LimitHandler from '../../functional/LimitHandler';
import PriceHandler from '../../functional/PriceHandler';
import ExportProduct from '../../functional/ExportProduct';
import DiscountPrice from '../../functional/DiscountPrice';










const getItems = panelStyle => [
    {
        key: '1',
        label: <div className='flex items-center w-full gap-[10px]'>
            <h3 className='font-semibold whitespace-nowrap'>Məhsullara avtomatik limit təyin et </h3>
            <PoppoverInfo
                text={<span>⚠️Bu əməliyyat icra olunarkən başqa bir əməliyyat başlatmayın⚠️</span>}
                content={
                    <div className='max-w-[500px] text-[15px]'>
                        <p className='text-justify '> Bu funksionallıq məhsullara avtomatik limit təyin edir. İki seçim var. Limiti olmayan məhsullar və bütün məhsullar. Bütün məhsullar seçilsə və faiz təyin olunsa onda bütün məhsullara limit təyin olunur. Yəni əgər məhsullarınızın bir qismində limit olsa belə onlar silinəcək və yerinə yeni limitlər yazılacaq. Limiti olmayan məhsullar seçilsə limiti olan məhsulların limiti dəyişmir sadəcə limiti olmayan məhsullara limit təyin edilir.</p>
                        <p>Düstur: <span className='text-[yellow] ps-[3px]'> Limit = endirimli qiymət - (endirimli qiymət * faiz / 100)</span></p>
                    </div>
                }
            />
        </div>,
        children: <>
            <LimitHandler />

        </>,
        style: panelStyle,
    },
    {
        key: '2',
        label:
            <div className='flex items-center w-full gap-[10px]'>
                <h3 className='font-semibold whitespace-nowrap'>Qiymətləri limitə uyğun tənzimlə</h3>
                <PoppoverInfo
                    text={<span>
                        ⚠️Bu əməliyyat icra olunarkən başqa bir əməliyyat başlatmayın⚠️
                    </span>}
                    content={
                        <div className='max-w-[500px] text-[15px]'>
                            <p className='text-justify '>Bu funksionallıq qiyməti limitdən aşağı enən məhsulları tapır, limitin üzərinə verdiyiniz faizi gəlir və endirimli qiyməti bu dəyərə uyğun dəyişir.Sadəcə endirimli qiyməti limitdən kiçik olan məhsulların qiyməti dəyişir.Əgər faiz sıfır olaraq qalsa onda endirimli qiymət faizə bərabər olacaq</p>
                            <p>Düstur: <span className='text-[yellow] ps-[3px]'> Endirimli qiymət = limit + (limit * faiz / 100)</span></p>
                        </div>
                    }
                />
            </div>,
        children: <PriceHandler />,
        style: panelStyle,
    },
    {
        key: '3',
        label:
            <div className='flex items-center w-full gap-[10px]'>
                <h3 className='font-semibold whitespace-nowrap'>Məhsulları ixrac et</h3>
                <PoppoverInfo />
            </div>,
        children: <ExportProduct />,
        style: panelStyle,
    },
    {
        key: '4',
        label: <div className='flex items-center w-full gap-[10px]'>
            <h3 className='font-semibold whitespace-nowrap'>Endirim qiyməti təyin etmə</h3>
            <PoppoverInfo
                text={<span>
                    ⚠️Bu əməliyyat icra olunarkən başqa bir əməliyyat başlatmayın⚠️
                </span>}
                content={
                    <div className='max-w-[500px] text-[15px]'>
                        <p className='text-justify '>Burada məhsullarınızın qiymətinin sizin rəqiblərinizin qiymətindən nə qədər aşağı qiymətə düşəcəyini təyin edirsiniz. Eyni məntiq qiymət qaldırma üçün də keçərlidir</p>
                        <p>Format: <span className='text-[yellow] ps-[3px]'> 1 qəpik {"=>"}  0.01 | 2 qəpik {"=>"}  0.02 | 50 qəpik {"=>"} 0.5 | 1 manat {"=>"} 1
                        </span></p>
                        <p>Düstur: <span className='text-[yellow] ps-[3px]'>Endirimli qiymət = ən ucuz rəqib mağaza qiyməti - endirim məbləği</span></p>
                    </div>
                }
            />
        </div>,

        children: <DiscountPrice />,
        style: panelStyle,
    },
];


const InnerOffCanvas = () => {
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: "#0F0A19",
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };
    return (
        <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            style={{ background: "rgba(255, 0, 0, 0)" }}
            items={getItems(panelStyle)}
        />
    );
};
export default InnerOffCanvas;