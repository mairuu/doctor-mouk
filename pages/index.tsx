import Image from 'next/image';
import { Text, Button, Box, createStyles } from '@mantine/core';
import type { NextPage } from 'next';

import { CustomerCard } from '../components/customer-card';
import { Darken } from '../components/darken';
import { Divider } from '../components/divider';
import { AppLayout } from '../components/layout';

const customers = [
  {
    name: 'แมททิว นักธุรกิจ',
    desc: 'หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจได้มากเลย ตอนนี้ขายดีเทน้ำเทท่าเลยครับ',
  },
  {
    name: 'แจ็คนักแสดง',
    desc: 'ต้องขอขอบคุณหมอหมึกในการช่วยให้ความสัมพันธ์ราบรื่นด้วยนะคะ ทำนายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ',
  },
  {
    name: 'น้ำใส นักศึกษา',
    desc: 'ที่หมอหมึกบอกมานะคะ เกิดเกือบหมดเลยค่ะ ถ้าไม่ได้หมอหมึกช่วยไว้ ชีวิตคงแย่เลยคะ ดีนะที่ป้องกันเรื่องร้าย ๆ ทันเวลา',
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    margin: '8px 0',
    fontSize: 48,
    fontFamily: 'FC Neo Classic',
  },

  subtitle: {
    fontSize: 20,
  },

  container: {
    paddingTop: 200,
    paddingBottom: 180,
    paddingLeft: 16,
    paddingRight: 16,
    maxWidth: 960,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  split: {
    display: 'flex',
    flexFlow: 'column-reverse',
    gap: 16,

    [theme.fn.largerThan('sm')]: {
      flexFlow: 'row',

      '& > div': {
        width: '50%',
        flex: '1 1 50%',
      },
    },
  },

  feedback: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: 16,
  },

  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Home: NextPage = () => {
  const { classes, theme, cx } = useStyles();

  return (
    <AppLayout>
      <Darken>
        <Box
          className={classes.container}
          sx={{
            display: 'flex',
            flexFlow: 'column wrap',
            alignItems: 'center',
          }}
        >
          <Text
            component='h1'
            align='center'
            variant='gradient'
            gradient={{
              from: theme.colors.violet[4],
              to: theme.colors.grape[6],
            }}
            sx={{
              margin: 0,
              fontSize: 72,
              fontFamily: 'FC Neo Classic',
            }}
          >
            หมอหมึก
          </Text>
          <Text
            m={0}
            sx={{
              maxWidth: 460,
              textAlign: 'center',
              fontSize: 'clamp(1.25rem, -0.875rem + 3vw, 1.5rem)',
            }}
            component='p'
          >
            ผู้มีประสบการณ์พยากรณ์กว่า 10 ปี พร้อมคำพยากรณ์ที่แม่นยำ
          </Text>

          <Button
            mt={48}
            size='xl'
            variant='gradient'
            gradient={{
              from: theme.colors.violet[5],
              to: theme.colors.cyan[5],
            }}
          >
            จองคิว
          </Button>
        </Box>
      </Darken>

      <div style={{ color: '#eee' }}>
        <Divider
          style={{
            width: '150%',
            height: 56,
            transform: 'scaleX(-1)',
          }}
        />

        <div className={cx(classes.container, classes.split)}>
          <div>
            <Text
              component='h2'
              className={classes.title}
              style={{ margin: 0 }}
            >
              ประวัติหมอหมึก
            </Text>

            <Text className={classes.subtitle}>
              หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวงด้วยลูกแก้วพยากรณ์
              ไพ่ทาโร่ และการดูลายมือ
              <br />
              <br />
              ด้วยความสามารถที่หลากหลาย
              ทำให้หมอหมึกสามารถเลือกวิธีการทำนายที่เหมาะสมแต่ละบุคคลเพื่อให้ได้ผลลัพธ์ที่แม่นยำที่สุด
            </Text>
          </div>

          <div className={classes.center}>
            <Image
              width={300}
              height={300}
              src='/assets/placeholder.jpeg'
              alt='หมอหมึก'
              style={{ borderRadius: 8 }}
            />
          </div>
        </div>

        <div className={classes.container}>
          <Text
            component='h2'
            className={classes.title}
            sx={{
              textAlign: 'center',
              margin: '16px 0 32px 0',
            }}
          >
            รีวิวจากลูกค้า
          </Text>

          <div className={classes.feedback}>
            {customers.map((customer, i) => (
              <CustomerCard key={i} {...customer} />
            ))}
          </div>
        </div>

        <Divider
          style={{
            width: '150%',
            height: 40,
            transform: 'rotate(180deg)',
            marginBottom: -8,
          }}
        />
      </div>

      <Darken>
        <div
          className={cx(classes.container, classes.split)}
          style={{ gap: 30 }}
        >
          <div className={classes.center}>
            <Image width={480} height={480} src='/assets/map.png' alt='' />
          </div>
          <div>
            <Text
              component='h2'
              className={classes.title}
              style={{ fontSize: 'clamp(2rem, -0.875rem + 5vw, 2.5rem)' }}
            >
              ทำนายชะตากับหมอหมึก
            </Text>
            <Text className={classes.subtitle}>
              สามารถจองคิวได้ตาม
              <br />
              อีเมล: octopus_fortune@teller.component
              <br />
              โทรศัพท์: 099 XXXX XXX
              <br />
              และมาที่สำนักที่
              <br />
              ชั้น 12 อาคาร JWC ถนนโปนแกรมมิ่ง แขวงเว็ป เขตอินเตอร์เน็ต กรุงเทพ
              99999 ตามเวลาที่นัดไว้
              <br />
              <br />
              จำกัดที่ 10 คิวต่อหนึ่งวัน เปิดทำการ 10.00 - 18.30 น. พัก 12.00 -
              13.00 เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์และอาทิตย์
            </Text>
          </div>
        </div>
      </Darken>
    </AppLayout>
  );
};

export default Home;
